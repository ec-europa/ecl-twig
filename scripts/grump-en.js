#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const { ncp } = require('ncp');

const options = {};
options.dereference = true;

ncp('scripts/pre-commit.combined', '.git/hooks/pre-commit', options, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('Pre-commit hook overridden.');
});
