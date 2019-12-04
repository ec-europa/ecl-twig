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
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false,
};

const htmlDiffer = new HtmlDiffer(diffOptions);
const components = singleComponent[0]
  ? [singleComponent[0]]
  : fs.readdirSync(systemFolder);

components.forEach(component => {
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);
  dataFiles.forEach(dataFile => {
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
      res = 'Perfectly matching!';
    } else {
      res = logger.logDiffText(diff, { charsAroundDiff: 40 });
    }
    console.log(`Comparing ${jsFileName} with ${phpFileName}:`);
    console.log(`${res}\n`);
  });
});
