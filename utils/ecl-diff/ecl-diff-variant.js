#!/usr/bin/env node

/* eslint-disable no-console, consistent-return, no-await-in-loop, import/no-dynamic-require, no-async-promise-executor */

const fs = require('fs');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const he = require('he');
const { HtmlDiffer } = require('html-differ');
const { execSync } = require('child_process');

const domain = 'https://ec.europa.eu';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const version = execSync('npm view @ecl/ec-component-link versions')
  .toString()
  .replace(/([\s'[\]|])/g, '')
  .split(',')
  .reverse()
  .slice(0, 1)
  .toString();
const eclPath = require(`./mapping/ecl-mapping-${version}.js`);

let matches = 0;
let totalVariants = 0;
let current = '';
let message = '';
let diffMessage = '';
let variantMessage = '';
let successMsg = '';

const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};
const htmlDiffer = new HtmlDiffer(diffOptions);

const eclDiffVariant = (data, system) => {
  const systemFolder = `${distFolder}/packages/${system}`;
  const { component } = data;
  const { variant } = data;
  const { file } = data;
  const diffFolder = `${systemFolder}/${component}/ecl-diff`;
  const diffFilePath = `${systemFolder}/${component}/ecl-diff/${component}.diff.html`;
  let componentMessage = '';

  if (current !== component) {
    // This is for the logs.
    componentMessage += `\n-------------------------------------------------------`;
    componentMessage += `\nChecking component: ${component}\n`;
    componentMessage += `-------------------------------------------------------\n`;
    current = component;
    message += componentMessage;
    // Create the ecl-diff folder in the component root if it doesn't exist.
    if (!fs.existsSync(diffFolder)) {
      fs.mkdirSync(diffFolder);
    }
    // Create the report file, it only contains the headings for now.
    fs.writeFile(diffFilePath, componentMessage, (err) => {
      if (err) throw err;
    });
  }

  return new Promise(async (resolve, reject) => {
    const eclTwigMarkup = fs
      .readFileSync(`${systemFolder}/${component}/${file}`, 'utf-8')
      .toString()
      // Masks, to avoid repeating patterns in the diff (@see htmldiffer).
      // Icons.
      .replace(
        /xlink:href="\/?icons(-social)?\.svg#/g,
        'xlink:href="{{.*icons.*.svg#}}'
      )
      // Booleans.
      .replace(/(data-ecl[A-Za-z-]+)(?=[\s/>])/g, '$1="{{true|false}}"')
      // aria-hidden
      .replace(/(aria-hidden)(=".+")/g, '$1="{{true|false}}"')
      // Logo
      .replace(
        /\/logo--(en|fr|mute).svg/g,
        '{{(.*?)logo--(en|fr|mute).*.svg}}'
      );
    // On the Ecl side.
    const eclGluePath = eclPath(component, variant, system);
    if (!eclGluePath) {
      return resolve();
    }
    if (eclGluePath !== '') {
      totalVariants += 1;
      const eclFinalUrl = `${domain}/component-library/v${version}/playground/${system}/?path=/story/${eclGluePath}`;
      // Puppeteer will try to reach the requested component variant page.
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(eclFinalUrl);
      await page.setViewport({ width: 1900, height: 1600 });
      const htmlReveal = await page.waitForSelector(
        'button[title="Show HTML"]'
      );
      if (htmlReveal) {
        // This will reveal the markup container.
        await page.click('button[title="Show HTML"]');
        try {
          await page.waitForSelector('code');
        } catch {
          resolve();
        }
        if (await page.waitForSelector('code')) {
          let eclMarkup = await page.evaluate(
            (el) => el.innerHTML,
            await page.$('code')
          );
          await browser.close();
          // The html we get is enriched by a syntax highlighter.
          eclMarkup = he.decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
          const eclMarkupMinusDiv = eclMarkup.replace(/^<div>/, '');
          if (eclMarkupMinusDiv !== eclMarkup) {
            eclMarkup = eclMarkupMinusDiv.replace(/<\/div>$/, '');
          }
          // Make the diff against the php rendered files.
          const diff = htmlDiffer.diffHtml(eclTwigMarkup, eclMarkup);
          const isEqual = htmlDiffer.isEqual(eclTwigMarkup, eclMarkup);
          const thisMessage = `Comparing ${file} with ECL markup from ${eclFinalUrl}:`;
          console.log(thisMessage);
          message += thisMessage;

          if (isEqual) {
            successMsg = '> Perfectly matching!*\n';
            console.log(successMsg);
            matches += 1;
            message += successMsg;
            variantMessage = `\n${successMsg}`;
          } else {
            logger.logDiffText(diff, { charsAroundDiff: 40 });
            diffMessage = `\n> Differences were found, please check the diff by running yarn diff:ecl ${system} ${component}\n`;
            message += diffMessage;
            variantMessage = diffMessage;
          }
          // Here we append the reports about the single variants to the diff file.
          fs.appendFileSync(diffFilePath, thisMessage + variantMessage);
          // We resolve the promise with the number of matches, number of variants and
          // a message that gets populated in each iteration.
          resolve({
            matches,
            variants: totalVariants,
            message,
          });
        } else {
          reject(matches);
          console.error(
            'Looks like we are not able to retrieve the html for this story...'
          );
        }
      }
    } else {
      // It should not happen, if we reach this is because our mapping is not correct.
      reject(matches);
      console.error(
        'Looks like we are not able to retrieve the html for this story...'
      );
    }
  });
};

module.exports = eclDiffVariant;
