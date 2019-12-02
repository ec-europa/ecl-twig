#!/usr/bin/env node

/* eslint-disable global-require, no-unused-vars, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const system = 'ec';

/**
 * Helper to migrate demo data for Twig PHP renderer.
 *
 * @param {String} readLocation The place to seek for demo data files.
 * @param {String} saveLocation The place to create a demo data file for PHP renderer.
 */
const createDataFiles = ({ readLocation, saveLocation, componentRootName }) => {
  const files = fs.readdirSync(readLocation);

  files.forEach(file => {
    // require() is necessary at all cases.
    // Sometimes files contain results of adaptation.
    const dataImport = require(`${readLocation}/${file}`);
    // Normalize the difference of module systems.
    const data = dataImport.default ? dataImport.default : dataImport;

    const fileName = file.replace('js', 'json');
    const filePath = path.resolve(`${saveLocation}/${fileName}`);

    fse.outputFileSync(filePath, JSON.stringify(data));
  });
};

let readLocation = '';
// The script needs to be executed from the project root of the workspace.
// This is for babel to be able to import modules consistently between packages.
const rootFolder = process.cwd();
const nodeModules = `${rootFolder}/node_modules`;
const distFolder = `${rootFolder}/php`;
const listLocation = path.resolve(
  `${rootFolder}/src/${system}/packages/${system}-components/package.json`
);
const list = require(listLocation);

// Limit the list temporarily.
const listRender = Object.keys(list.dependencies);

listRender.forEach(pkg => {
  const componentRootName = pkg.split(`@ecl-twig/${system}-component-`)[1];
  const packageLocation = `${nodeModules}/${pkg}`;
  let specLocation = '';

  if (componentRootName === 'ordered-list') {
    specLocation = packageLocation.replace(
      `@ecl-twig/${system}-component-${componentRootName}`,
      `@ecl/${system}-specs-list`
    );
  } else {
    specLocation = packageLocation.replace(
      `@ecl-twig/${system}-component-${componentRootName}`,
      `@ecl/${system}-specs-${componentRootName}`
    );
  }

  const eclTwigPath = path.resolve(packageLocation);
  const eclSpecPath = path.resolve(specLocation);

  const saveLocation = path.resolve(
    `${distFolder}/packages/${system}/${componentRootName}/specs`
  );

  // Check for data overrides.
  if (fs.existsSync(`${eclTwigPath}/demo`)) {
    readLocation = `${eclTwigPath}/demo`;
  } else if (fs.existsSync(`${eclSpecPath}/demo`)) {
    // Try to fallback to specification data.
    readLocation = `${eclSpecPath}/demo`;
  }
  // If data file was located, use it.
  if (readLocation !== '') {
    createDataFiles({ readLocation, saveLocation, componentRootName });
  }
});
