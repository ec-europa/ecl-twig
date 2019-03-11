/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');

// Useful when packages in current workspace.
const resolveSymlinked = filePath => {
  const lstat = fs.lstatSync(filePath);
  return lstat.isSymbolicLink()
    ? path.resolve(path.dirname(filePath), fs.readlinkSync(filePath))
    : false;
};

const components = require('../../../../ec/packages/ec-components/package.json');

Object.keys(components.dependencies).forEach(pkg => {
  let data = {};
  const component = pkg.split('@ecl-twig/ec-component-')[1];
  const saveLocation = path.resolve(`./ec/${component}`);

  try {
    // Overriden/adapted demo data, part of the workspace.
    const packageLocation = resolveSymlinked(`../../../../node_modules/${pkg}`);
    data = require(`${packageLocation}/demo/data`);
  } catch (error) {
    // Original demo data coming from ECL specification.
    const specLocation = `../../../../node_modules/@ecl/ec-specs-${component}`;
    data = require(path.resolve(`${specLocation}/demo/data`));
  }

  if (!fs.existsSync(saveLocation)) {
    fs.mkdirSync(saveLocation);
  }

  fs.writeFileSync(
    path.resolve(`${saveLocation}/data.json`),
    JSON.stringify(data)
  );
});
