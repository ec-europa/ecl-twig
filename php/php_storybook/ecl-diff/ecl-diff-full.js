#!/usr/bin/env node

/* eslint-disable import/no-unresolved, no-console, no-param-reassign */

const eclDiffComponent = require('./ecl-diff-component.js');
let packages = require('@ecl-twig/ec-storybook/.storybook/packages.js').list;

const getBase = element => {
  [, element] = element.split('ec-component-');
  return element;
};
// We build a list of components by their root name.
packages = packages.map(getBase);
packages.pop();
packages = packages.slice(0, 5);

Promise.all(packages.map(eclDiffComponent)).then(console.log('Finished...'));
