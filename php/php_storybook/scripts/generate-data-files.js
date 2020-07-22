#!/usr/bin/env node

/* eslint-disable global-require, unicorn/explicit-length-check, no-unused-vars, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

/**
 * Helper to migrate demo data for Twig PHP and Js renderer.
 *
 * @param {String} readLocation The place to seek for demo data files.
 * @param {String} saveLocation The place to create a demo data file for PHP renderer.
 */
const createDataFiles = ({
  readLocation,
  saveLocation,
  componentRootName,
  system,
}) => {
  const allFiles = fs.readdirSync(readLocation);
  let euFiles = [];
  let files = [];
  if (system === 'eu') {
    euFiles = allFiles.filter(file => {
      return file.startsWith('eu-');
    });
  }
  if (euFiles.length < 1) {
    files = allFiles.filter(file => {
      return !file.startsWith('eu-');
    });
  } else {
    files = euFiles;
  }

  files.forEach(file => {
    // require() is necessary at all cases.
    // Sometimes files contain results of adaptation.
    const dataImport = require(`${readLocation}/${file}`);
    // Normalize the difference of module systems.
    const data = dataImport.default ? dataImport.default : dataImport;
    const fileName = file.replace('js', 'json').replace('eu-', '');
    const filePath = path.resolve(`${saveLocation}/${fileName}`);

    fse.outputFileSync(filePath, JSON.stringify(data));
  });
};

let readLocation = '';
const args = process.argv.slice(2);
const systems = args[0] ? [args[0]] : ['ec', 'eu'];
// The script needs to be executed from the project root of the workspace.
// This is for babel to be able to import modules consistently between packages.
const rootFolder = process.cwd();
const nodeModules = `${rootFolder}/node_modules`;
const distFolder = `${rootFolder}/php`;
const listLocation = path.resolve(
  `${rootFolder}/src/ec/packages/ec-components/package.json`
);
const list = require(listLocation);
// Limit the list temporarily.
let listRender = Object.keys(list.dependencies);
// Single component, second argument from the cli.
if (args[1]) {
  listRender = [`@ecl-twig/ec-component-${args[1]}`];
}
// Loop in the identified components.
systems.forEach(system => {
  listRender.forEach(pkg => {
    const componentRootName = pkg.split(`@ecl-twig/ec-component-`)[1];
    const packageLocation = `${nodeModules}/${pkg}`;
    let specLocation = '';
    if (componentRootName === 'ecl-compliance') {
      return;
    }
    if (
      componentRootName === 'ordered-list' ||
      componentRootName === 'unordered-list'
    ) {
      specLocation = packageLocation.replace(
        `@ecl-twig/ec-component-${componentRootName}`,
        `@ecl/ec-specs-list`
      );
    } else {
      specLocation = packageLocation.replace(
        `@ecl-twig/ec-component-${componentRootName}`,
        `@ecl/ec-specs-${componentRootName}`
      );
    }

    const eclTwigPath = path.resolve(packageLocation);
    const eclSpecPath = path.resolve(specLocation);
    // Create the packages folder if needed.
    if (!fs.existsSync(`${distFolder}/packages`)) {
      fs.mkdirSync(`${distFolder}/packages`);
    }
    // Create the system folder if needed.
    if (!fs.existsSync(`${distFolder}/packages/${system}`)) {
      fs.mkdirSync(`${distFolder}/packages/${system}`);
    }

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
      createDataFiles({
        readLocation,
        saveLocation,
        componentRootName,
        system,
      });
    }
  });
});
