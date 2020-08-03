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
    /\/eu-logo--mute.svg/g,
    /\/eu-logo--en.svg/g,
    /\/eu-logo--fr.svg/g,
    /\/eu-logo-mobile-en.svg/g,
    /\/eu-logo-mobile-fr.svg/g,
    /\/en.svg/g,
    /\/fr.svg/g,
    /\/eu-en-desktop.svg/g,
    /\/eu-fr-desktop.svg/g,
  ],
  to: [
    'icons.svg',
    'icons-social.svg',
    'logo--en.svg',
    'logo--fr.svg',
    'logo--mute.svg',
    'eu-logo--mute.svg',
    'eu-logo--en.svg',
    'eu-logo--fr.svg',
    'eu-logo-mobile-en.svg',
    'eu-logo-mobile-fr.svg',
    'en.svg',
    'fr.svg',
    'eu-en-desktop.svg',
    'eu-fr-desktop.svg',
  ],
};

replace(options, (error, results) => {
  if (error) {
    return console.error('Error occurred:', error);
  }
  return console.log('Replacement results:', results);
});
