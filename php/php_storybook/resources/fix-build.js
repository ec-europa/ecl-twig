#!/usr/bin/env node

/* eslint-disable no-console */

const replace = require('replace-in-file');

const options = {
  files: 'php/dist/**/*',
  from: [
    /\/icons.svg/g,
    /\/icons-social.svg/g,
    /\/logo--en.svg/g,
    /\/logo--fr.svg/g,
    /\/logo--mute.svg/g,
  ],
  to: [
    'icons.svg',
    'icons-social.svg',
    'logo--en.svg',
    'logo--fr.svg',
    'logo--mute.svg',
  ],
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  return console.log('Replacement results:', results);
});
