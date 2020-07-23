#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies, no-console */

const { ncp } = require('ncp');
const fs = require('fs');

const options = {};
options.dereference = true;

ncp('static/images/', 'php/dist/ec/', options, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('Assets copied in the php/dist/ec folder');
});

if (fs.existsSync('php/dist/eu/')) {
  ncp('static/images/', 'php/dist/eu/', options, err => {
    if (err) {
      return console.error(err);
    }
    return console.log('Assets copied in the php/dist/eu folder');
  });
}
ncp('static/index.html', 'php/dist/index.html', {}, err => {
  if (err) {
    return console.error(err);
  }
  return console.log('Index.html copied in the php/dist folder');
});
