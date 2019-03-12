/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const list = require('../../../../ec/packages/ec-components/package.json');

// Limit the list temporarily.
const listRender = Object.keys(list.dependencies).slice(0, 7);

/**
 * Helper to migrate demo data for Twig PHP renderer.
 *
 * @param {String} readLocation The place to seek for demo data files.
 * @param {String} saveLocation The place to create a demo data file for PHP renderer.
 */
const createDataFiles = ({ readLocation, saveLocation }) => {
  const files = fs.readdirSync(readLocation);

  files.forEach(file => {
    // require() is necessary at all cases.
    // Sometimes files contain results of adaptation.
    const data = require(`${readLocation}/${file}`);
    const fileNew = file.replace('js', 'json');

    fs.writeFileSync(
      path.resolve(`${saveLocation}/${fileNew}`),
      JSON.stringify(data)
    );
  });
};

const system = 'ec';
const nodeModules = '../../../../node_modules';
let readLocation = '';

// Create the folder for storing results.
if (!fs.existsSync(`./${system}`)) {
  fs.mkdirSync(`./${system}`);
}

listRender.forEach(pkg => {
  const componentRootName = pkg.split('@ecl-twig/ec-component-')[1];

  const packageLocation = `${nodeModules}/${pkg}`;
  const specLocation = packageLocation.replace(
    `@ecl-twig/ec-component-${componentRootName}`,
    `@ecl/ec-specs-${componentRootName}`
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
