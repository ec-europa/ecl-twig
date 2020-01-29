#!/usr/bin/env node

/* eslint-disable no-console, import/no-extraneous-dependencies */

const replace = require('replace-in-file');

const options = {
  files: 'netlify.toml',
  from: ['command = "yarn dist"', 'publish = "build"'],
  to: ['command = "composer install && yarn dist:php"', 'publish = "php/dist"'],
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  return console.log('Replacement results:', results);
});
