#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const { ncp } = require('ncp');

const options = {};
options.dereference = true;

ncp('static/images/', 'php/dist/', options, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('Assets copied in the php/dist folder');
});

ncp('static/index.html', 'php/dist/index.html', {}, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('Index.html copied in the php/dist folder');
});
