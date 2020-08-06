#!/usr/bin/env node

/* eslint-disable no-console, no-param-reassign, unicorn/no-reduce, import/no-dynamic-require */
const args = process.argv.slice(2);
const system = args[0] ? args[0] : 'ec';
const rootFolder = process.cwd();

const fs = require('fs');

const packages = require(`@ecl-twig/${system}-storybook/.storybook/packages.js`)
  .list;
const eclDiffComponent = require('./ecl-diff-component.js');

const getBase = (element) => {
  [, element] = element.split('ec-component-');
  return element;
};

// We build a list of components by their root name.
const components = [];
const exclusions = [
  'ec-component-inpage-navigation',
  'ec-component-ecl-compliance',
  'ec-component-contextual-navigation',
  'ec-components',
];
if (system === 'eu') {
  exclusions.push(
    'ec-component-accordion',
    'ec-component-footer',
    'ec-component-menu-legacy'
  );
}
packages.forEach((item) => {
  // But we exclude some.
  if (!exclusions.includes(item)) {
    components.push(getBase(item));
  }
});
// We run the promises sequentially to avoid memory leaks,
// the reduce here will concatenate the Promise.all relateive
// to each component.
components
  .reduce(
    (current, next) => current.then(() => eclDiffComponent(next, system)),
    Promise.resolve()
  )
  .then((result) => {
    let message = `\nEcl-diff-full task completed with ${result[0].matches} perfect matches out of ${result[0].variants} variants checked in ${components.length} components.\n`;
    console.log(message);
    message = `-------------------------------------------------------\n${message}`;
    result[0].message += message;
    // Write the full report.
    try {
      fs.writeFileSync(
        `${rootFolder}/ecl-diff-full-results.txt`,
        result[0].message
      );
    } catch (error) {
      console.error(error);
    }
  });
