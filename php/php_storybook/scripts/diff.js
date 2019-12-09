#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const fs = require('fs');
const { HtmlDiffer } = require('html-differ');
const logger = require('html-differ/lib/logger');

const system = 'ec';
const jsExtension = '.js.html';
const phpExtension = '.php.html';
const singleComponent = process.argv.slice(2);
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const diffOptions = {
  ignoreAttributes: false,
  compareAttributesAsJSON: true,
  ignoreWhitespaces: false,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(diffOptions);
const components = singleComponent[0]
  ? [singleComponent[0]]
  : fs.readdirSync(systemFolder);

let matches = 0;
let totalComponents = 0;
let totalVariants = 0;
const failed = [];

components.forEach(component => {
  totalComponents += 1;
  console.log(`\nChecking component: ${component}:`);
  console.log(`----------------------------------`);
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);
  dataFiles.forEach(dataFile => {
    totalVariants += 1;
    const jsFileName =
      dataFile.replace('data', component).slice(0, -5) + jsExtension;
    const phpFileName =
      dataFile.replace('data', component).slice(0, -5) + phpExtension;
    const jsMarkup = fs
      .readFileSync(`${systemFolder}/${component}/js/${jsFileName}`, 'utf-8')
      .toString();
    const phpMarkup = fs
      .readFileSync(`${systemFolder}/${component}/${phpFileName}`, 'utf-8')
      .toString();

    const diff = htmlDiffer.diffHtml(jsMarkup, phpMarkup);
    const isEqual = htmlDiffer.isEqual(jsMarkup, phpMarkup);
    let res = '';

    if (isEqual) {
      res = '> Perfectly matching!*';
      matches += 1;
    } else {
      res = logger.logDiffText(diff, { charsAroundDiff: 40 });
      failed.push(component);
    }
    console.log(`Comparing ${jsFileName} with ${phpFileName}:`);
    console.log(`${res}`);
  });
});

let percent = (100 * matches) / totalVariants;
percent = percent.toFixed(2);

console.log(
  `\nWe've been comparing ${totalVariants} variants in ${totalComponents} components.`
);
console.log(`With ${matches} perfect* matches, the ${percent}%.`);

if (failed.length > 0) {
  console.log(`You might want to check: ${failed.toString()}`);
}
console.log(`\n* The files we check are formatted with https://www.npmjs.com/package/prettier,
  for the diff we use https://www.npmjs.com/package/html-differ, with this conf:`);
console.log(diffOptions);
