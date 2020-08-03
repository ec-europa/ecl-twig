#!/usr/bin/env node

/* eslint-disable import/no-unresolved, no-console, no-param-reassign */

const eclDiffComponent = require('./ecl-diff-component.js');
let packages = require('@ecl-twig/ec-storybook/.storybook/packages.js').list;

const getBase = element => {
  [, element] = element.split('ec-component-');
  return element;
};

// We build a list of components by their root name.
let components = [];
packages.forEach((package) => {
  if (
    package !== 'ec-component-inpage-navigation' &&
    package !== 'ec-component-ecl-compliance' &&
    package !== 'ec-component-contextual-navigation' &&
    package !== 'ec-components') {
    components.push(getBase(package));
  }
});

components.reduce((current, next) =>
  current.then(_ => eclDiffComponent(next)),
  Promise.resolve()
);
