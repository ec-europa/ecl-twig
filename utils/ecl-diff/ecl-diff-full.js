#!/usr/bin/env node

/* eslint-disable no-console, no-param-reassign, unicorn/no-reduce */

const fs = require('fs');

const rootFolder = process.cwd();
const packages = require('@ecl-twig/ec-storybook/.storybook/packages.js').list;
const eclDiffComponent = require('./ecl-diff-component.js');

const getBase = (element) => {
  [, element] = element.split('ec-component-');
  return element;
};

// We build a list of components by their root name.
const components = [];
packages.forEach((item) => {
  // But we exclude some.
  if (
    item !== 'ec-component-inpage-navigation' &&
    item !== 'ec-component-ecl-compliance' &&
    item !== 'ec-component-contextual-navigation' &&
    item !== 'ec-components'
  ) {
    components.push(getBase(item));
  }
});
// We run the promises sequentially to avoid memory leaks,
// the reduce here will concatenate the Promise.all relateive
// to each component.
components
  .reduce(
    (current, next) => current.then(() => eclDiffComponent(next)),
    Promise.resolve()
  )
  .then((result) => {
    let message = `\nEcl-diff-full task completed with ${result[0].matches} perfect matches out of ${result[0].variants} variants checked in ${components.length} components.\n`;
    console.log(message);
    message = `-------------------------------------------------------\n${message}`;
    result[0].message += message;
    // Write the full report.
    fs.writeFileSync(
      `${rootFolder}/ecl-diff-full-results.txt`,
      result[0].message
    );
  });
