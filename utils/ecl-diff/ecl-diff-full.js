#!/usr/bin/env node

/* eslint-disable import/no-unresolved, no-console, no-param-reassign, unicorn/no-reduce */

const packages = require('@ecl-twig/ec-storybook/.storybook/packages.js').list;
const eclDiffComponent = require('./ecl-diff-component.js');

const getBase = (element) => {
  [, element] = element.split('ec-component-');
  return element;
};

// We build a list of components by their root name.
let components = [];
packages.forEach((item) => {
  if (
    item !== 'ec-component-inpage-navigation' &&
    item !== 'ec-component-ecl-compliance' &&
    item !== 'ec-component-contextual-navigation' &&
    item !== 'ec-components'
  ) {
    components.push(getBase(item));
  }
});
components = ['accordion'];
components.reduce(
  (current, next) => current.then(() => eclDiffComponent(next)),
  Promise.resolve()
);
