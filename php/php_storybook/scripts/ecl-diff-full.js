#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console,
no-param-reassign, no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const logger = require('html-differ/lib/logger');
const puppeteer = require('puppeteer');
const decode = require('decode-html');
const eclPath = require('../mapping/ecl-mapping-2.22.0.js');
const { HtmlDiffer } = require('html-differ');
const system = 'ec';
const domain = 'https://ec.europa.eu';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
//const components = fs.readdirSync(systemFolder);
const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(diffOptions);
const components = ['blockquote', 'date-block', 'datepicker'];
let matches = 0;
let totalComponents = 0;
let totalVariants = 0;
const eclDiffFull = new Promise(function(resolve, reject) {
  components.forEach(component => {
    totalComponents += 1;
    const twigFullPath = `${systemFolder}/${component}`;
    const dataFiles = fs.readdirSync(`${twigFullPath}/specs`);

    dataFiles.forEach(async (dataFile) => {
      totalVariants += 1;
      const fileName = dataFile.replace('data', component).slice(0, - 5) + '.php.html';
      const variant = dataFile.includes('--') ? dataFile.replace('data', '').slice(0, - 5) : 'default';
      const eclTwigMarkup = fs
        .readFileSync(`${twigFullPath}/${fileName}`, 'utf-8')
        .toString()
        // Masks, to avoid repeating patterns in the diff (@see htmldiffer).
        // Icons.
        .replace(
          /xlink:href="\/?icons(-social)?\.svg#/g,
          'xlink:href="{{.*icons.*.svg#}}'
        )
        // Booleans.
        .replace(/(data-ecl[-A-Za-z]+)(?=[\s/>])/g, '$1="{{true|false}}"')
        // aria-hidden
        .replace(/(aria-hidden)(=".+")/g, '$1="{{true|false}}"')
        // Logo
        .replace(
          /\/logo--(en|fr|mute).svg/g,
          '{{(.*?)logo--(en|fr|mute).*.svg}}'
        );
      // On the Ecl side.
      const eclGluePath = eclPath(component, variant);
      const eclFinalUrl = `${domain}/component-library/playground/ec/?path=/story/${eclGluePath}`;
      // Puppeteer will try to reach the requested component variant page.
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(eclFinalUrl);
      await page.setViewport({ width: 1900, height: 1600 });
      // We are ready to get the html, hopefully of the right story, otherwise we'll tell you.
      const htmlReveal = await page.waitForSelector('button[title="Show HTML"]');
      if (htmlReveal) {
      // This will reveal the markup container.
        await page.click('button[title="Show HTML"]');
        if (await page.waitForSelector('code')) {
          let eclMarkup = await page.evaluate(
            el => el.innerHTML,
              await page.$('code')
          );
          await browser.close();
          // The html we get is enriched by a syntax highlighter.
          eclMarkup = decode(eclMarkup.replace(/<\/?[^>]+(>|$)/g, ''));
          const eclMarkupMinusDiv = eclMarkup.replace(/^<div>/, '');
          if (eclMarkupMinusDiv !== eclMarkup) {
            eclMarkup = eclMarkupMinusDiv.replace(/<\/div>$/, '');
          }
          // Make the diff against the php rendered files.
          const diff = htmlDiffer.diffHtml(eclTwigMarkup, eclMarkup);
          const isEqual = htmlDiffer.isEqual(eclTwigMarkup, eclMarkup);
          console.log(
            `\nComparing ${fileName} with ECL markup from ${eclFinalUrl}:`
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
        } else {
          console.error(
            'Looks like we are not able to retrieve the html for this story...'
          );
        }
      } else {
        console.error(
          'Looks like we are not able to retrieve the html for this story...'
        );
      }
    });
  });

  resolve({
    matches: matches
  })
});

eclDiffFull.then(function(resolve) {
  console.log(resolve);
  const percent = (100 * resolve.matches) / totalVariants;
    percent.toFixed(2);

    console.log(
      `\nWe've been comparing ${totalVariants} variants in ${totalComponents} components.`
    );
    console.log(`With ${resolve.matches} perfect* matches, the ${percent}%.`);
    console.log(`\n* The files we check are formatted with https://www.npmjs.com/package/prettier,
      for the diff we use https://www.npmjs.com/package/html-differ, with this conf:`);
    console.log(diffOptions);
});
