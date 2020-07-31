#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const fs = require('fs');
const { HtmlDiffer } = require('html-differ');
const logger = require('html-differ/lib/logger');

const args = process.argv.slice(2);
const system = args[0] ? args[0] : 'ec';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;
const diffOptions = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: false,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(diffOptions);
const components = args[1] ? [args[1]] : fs.readdirSync(systemFolder);

let matches = 0;
let totalComponents = 0;
let totalVariants = 0;
const failed = [];

components.forEach((component) => {
  // Our validation component.
  if (component === 'ecl-compliance') {
    return;
  }

  totalComponents += 1;
  console.log(`\nChecking component: ${component}:`);
  console.log(`-------------------------------------------------------`);
  if (!fs.existsSync(`${systemFolder}/${component}/specs`)) {
    console.error(`The ${component} has not been rendered yet, it seems...`);
    process.exit(1);
  }
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);
  const markup = [];

  dataFiles.forEach((dataFile) => {
    totalVariants += 1;
    const filenames = [];

    ['js', 'php'].forEach((lang) => {
      const extension = `.${lang}.html`;
      const js = lang === 'js' ? lang : '';
      const fileName =
        dataFile.replace('data', component).slice(0, -5) + extension;
      filenames.push(fileName);
      markup.lang = fs
        .readFileSync(`${systemFolder}/${component}/${js}/${fileName}`, 'utf-8')
        .toString();
    });

    const diff = htmlDiffer.diffHtml(markup.js, markup.php);
    const isEqual = htmlDiffer.isEqual(markup.js, markup.php);
    let res = '';

    if (isEqual) {
      res = '> Perfectly matching!*';
      matches += 1;
    } else {
      res = logger.logDiffText(diff, { charsAroundDiff: 40 });
      failed.push(component);
    }
    console.log(`Comparing ${filenames.join(' with ')}:`);
    console.log(`${res}`);
  });
});

const percent = (100 * matches) / totalVariants;
percent.toFixed(2);

console.log(
  `\nWe've been comparing ${totalVariants} variants in ${totalComponents} components.`
);
console.log(`With ${matches} perfect* matches, the ${percent}%.`);
if (failed.length > 0) {
  console.log(`You might want to check: ${failed.join()}`);
}
console.log(`\n* The files we check are formatted with https://www.npmjs.com/package/prettier,
  for the diff we use https://www.npmjs.com/package/html-differ, with this conf:`);
console.log(diffOptions);
