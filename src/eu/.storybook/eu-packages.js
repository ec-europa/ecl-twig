// @preval
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const path = require('path');
const packagesFolder = path.resolve('src/eu/packages');
// At the moment everything we need is in src/ec/packages/
const getPackagesFolders = () => {
  return fs.readdirSync(packagesFolder).filter(function(file) {
    return fs.statSync(packagesFolder + '/' + file).isDirectory();
  });
};

module.exports = {
  list: getPackagesFolders(),
};
