#!/usr/bin/env node

const ncp = require('ncp').ncp;
const options = {};
options.dereference = true;

ncp('static/images/', 'php/images/', options, function (err) {
 if (err) {
  return console.error(err);
 }
 console.log('Assets copied in the php/images folder');
});
