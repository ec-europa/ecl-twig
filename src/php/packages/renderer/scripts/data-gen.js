/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const createDataFiles = require('../lib/create-data-files');

const system = process.env.ECL_SYSTEM;

if (!system) {
  throw new Error('Missing ECL_SYSTEM environment variable.');
}

let readLocation = '';
const rootFolder = '../../../..';
const nodeModules = `${rootFolder}/node_modules`;
const list = require(`${rootFolder}/${system}/packages/${system}-components/package.json`);

// Create the folder for storing results.
if (!fs.existsSync(`./${system}`)) {
  fs.mkdirSync(`./${system}`);
}

// Limit the list temporarily.
const listRender = Object.keys(list.dependencies).slice(0, 3);

listRender.forEach(pkg => {
  const componentRootName = pkg.split(`@ecl-twig/${system}-component-`)[1];

  const packageLocation = `${nodeModules}/${pkg}`;
  const specLocation = packageLocation.replace(
    `@ecl-twig/${system}-component-${componentRootName}`,
    `@ecl/${system}-specs-${componentRootName}`
  );

  const eclTwigPath = path.resolve(packageLocation);
  const eclSpecPath = path.resolve(specLocation);
  const saveLocation = path.resolve(`./${system}/${componentRootName}`);

  // Ensure a folder with the component's name.
  // Store generated data and markup at this location.
  if (!fs.existsSync(saveLocation)) {
    fs.mkdirSync(saveLocation);
  }

  // Check for data overrides.
  if (fs.existsSync(`${eclTwigPath}/demo`)) {
    readLocation = `${eclTwigPath}/demo`;
  } else {
    // Try to fallback to specification data.
    readLocation = `${eclSpecPath}/demo`;
  }

  createDataFiles({ readLocation, saveLocation });
});
