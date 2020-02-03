#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, no-console,
no-param-reassign, no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const eclDiffVariant = require('./ecl-diff-variant.js');
const system = 'ec';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;

const getData = (component) => {
  let matches = 0;
  let totalComponents = 0;
  let totalVariants = 0;

  const twigFullPath = `${systemFolder}/${component}`;
  const twigFilesFolder = fs.readdirSync(`${twigFullPath}`);
  let twigFiles = twigFilesFolder.filter(elm => {
    return elm.match(/.*\.(php.html)/ig);
  });

  console.log(`\nChecking component: ${component}:`);
  console.log(`-------------------------------------------------------`);

  let variants = [];
  twigFiles.forEach(async (twigFile) => {
    const variant = twigFile.includes('--') ? twigFile.replace(component + '--', '').slice(0, - 9) : 'default';
    variants.push({'variant': variant, 'file': twigFile, 'component': component });
  });

  return variants;
};

module.exports = (component) => {
  const datas = getData(component);

  return Promise.all(datas.map(eclDiffVariant));
};
