#!/usr/bin/env node

const fs = require('fs');
const { HtmlDiffer } = require('html-differ');
const logger = require('html-differ/lib/logger');

const system = 'ec';
const jsExtension = '.js.html';
const phpExtension = '.php.html';
const single_component = process.argv.slice(2);
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

let components = [];
console.log(process.argv);
if (!single_component[0]) {
  components = single_component[0];
}
else {
  components = fs.readdirSync(systemFolder);
}

components.forEach(component => {
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);
  dataFiles.forEach(dataFile => {
    const jsFileName = dataFile.replace('data', component).slice(0, -5) + jsExtension;
    const phpFileName = dataFile.replace('data', component).slice(0, -5) + phpExtension;
    const jsMarkup = fs.readFileSync(`${systemFolder}/${component}/js/${jsFileName}`, 'utf-8').toString();
    const phpMarkup = fs.readFileSync(`${systemFolder}/${component}/${phpFileName}`, 'utf-8').toString();
    const diff = htmlDiffer.diffHtml(jsMarkup, phpMarkup);
    const isEqual = htmlDiffer.isEqual(jsMarkup, phpMarkup);

    if (isEqual) {
      res = 'Perfectly matching!';
    } else {
      res = logger.getDiffText(diff, {charsAroundDiff: 40});
    }
    console.log(`Comparing ${jsFileName} with ${phpFileName}:` )
    console.log(res + '\n');
  });
});