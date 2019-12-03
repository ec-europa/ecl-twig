#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const { ncp } = require('ncp');

const options = {};
options.dereference = true;

ncp('static/images/', 'php/images/', options, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('Assets copied in the php/images folder');
});
