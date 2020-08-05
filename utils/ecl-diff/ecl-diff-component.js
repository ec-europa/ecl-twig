#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs');
const eclDiffVariant = require('./ecl-diff-variant.js');

const system = 'ec';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;

const getData = (component) => {
  const twigFullPath = `${systemFolder}/${component}`;
  const twigFilesFolder = fs.readdirSync(`${twigFullPath}`);
  const twigFiles = twigFilesFolder.filter((elm) => {
    return elm.match(/.*\.(php.html)/gi);
  });

  const variants = [];
  twigFiles.forEach(async (twigFile) => {
    const variant = twigFile.includes('--')
      ? twigFile.replace(`${component}--`, '').slice(0, -9)
      : 'default';
    variants.push({ variant, file: twigFile, component });
  });

  return variants;
};

module.exports = (component) => {
  let message = `\nChecking component: ${component}\n`;
  message += `-------------------------------------------------------`;
  console.log(message);
  const datas = getData(component);

  return Promise.all(datas.map((variant) => eclDiffVariant(variant))).then(
    (result) => {
      return result;
    }
  );
};
