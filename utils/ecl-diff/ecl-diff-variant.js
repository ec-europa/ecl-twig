#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console, consistent-return,
no-param-reassign, no-restricted-syntax, no-await-in-loop, import/no-dynamic-require, no-async-promise-executor */
const fs = require('fs');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const he = require('he');
const { HtmlDiffer } = require('html-differ');
const { execSync } = require('child_process');

const system = 'ec';
const domain = 'https://ec.europa.eu';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const lastEclVersion = execSync('npm view @ecl/ec-component-link versions')
  .toString()
  .replace(/([\s'[\]|])/g, '')
  .split(',')
  .reverse()
  .slice(0, 1)
  .toString();

const cliArg = process.argv.slice(2);
const version = cliArg[0] ? cliArg[0] : lastEclVersion;
const eclPath = require(`./mapping/ecl-mapping-${version}.js`);

let matches = 0;
const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};
const htmlDiffer = new HtmlDiffer(diffOptions);

const eclDiffVariant = (data) => {
  const { component } = data;
  const { variant } = data;
  const { file } = data;

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
    const eclGluePath = eclPath(component, variant);
    if (!eclGluePath) {
      return resolve();
    }
    if (eclGluePath !== '') {
      const eclFinalUrl = `${domain}/component-library/v${version}/playground/ec/?path=/story/${eclGluePath}`;
      // Puppeteer will try to reach the requested component variant page.
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(eclFinalUrl);
      await page.setViewport({ width: 1900, height: 1600 });
      // We are ready to get the html, hopefully of the right story, otherwise we'll tell you.
      const htmlReveal = await page.waitForSelector(
        'button[title="Show HTML"]'
      );
      if (htmlReveal) {
        // This will reveal the markup container.
        await page.click('button[title="Show HTML"]');
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
          console.log(
            `\nComparing ${file} with ECL markup from ${eclFinalUrl}:`
          );

          let successMsg = false;
          if (isEqual) {
            successMsg = '> Perfectly matching!*';
            matches += 1;
          } else {
            logger.logDiffText(diff, { charsAroundDiff: 40 });
          }

          if (successMsg) {
            console.log(successMsg);
          }
          resolve(matches);
        } else {
          reject(matches);
          console.error(
            'Looks like we are not able to retrieve the html for this story...'
          );
        }
      }
    } else {
      reject(matches);
      console.error(
        'Looks like we are not able to retrieve the html for this story...'
      );
    }
  });
};

module.exports = eclDiffVariant;
