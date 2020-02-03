#!/usr/bin/env node

const eclDiffComponent = require('./ecl-diff-component.js');
let packages = require('../../../../src/ec/.storybook/ec-packages.js').list;
const getBase = element => {
  [, element] = element.split('ec-component-');
  return element;
};
// We build a list of components by their root name.
packages = packages.map(getBase);
packages.pop();
packages = packages.slice(0, 1);

Promise.all(packages.map(eclDiffComponent)).then(console.log('Then'));
