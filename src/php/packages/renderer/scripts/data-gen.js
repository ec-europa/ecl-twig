/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

const list = require('../../../../ec/packages/ec-components/package.json');

Object.keys(list.dependencies).forEach(pkg => {
  let data = {};

  const nodeModules = '../../../../node_modules';
  const componentRootName = pkg.split('@ecl-twig/ec-component-')[1];

  const packageLocation = `${nodeModules}/${pkg}`;
  const specLocation = packageLocation.replace(
    `@ecl-twig/ec-component-${componentRootName}`,
    `@ecl/ec-specs-${componentRootName}`
  );

  const eclTwigPath = path.resolve(packageLocation);
  const eclSpecPath = path.resolve(specLocation);
  const saveLocation = path.resolve(`./ec/${componentRootName}`);

  // Ensure a folder with the component's name.
  // Store generated data and markup at this location.
  if (!fs.existsSync(saveLocation)) {
    fs.mkdirSync(saveLocation);
  }

  // Check for data overrides.
  if (fs.existsSync(`${eclTwigPath}/demo`)) {
    data = require(`${eclTwigPath}/demo/data`);
  } else {
    data = require(`${eclSpecPath}/demo/data`);
  }

  fs.writeFileSync(
    path.resolve(`${saveLocation}/data.json`),
    JSON.stringify(data)
  );
});
