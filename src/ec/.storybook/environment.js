const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');
const path = require('path');
const packages = require('./packages.js');

const componentsFolder = [];
const absPath = path.resolve(__dirname + '/../packages');
for (let folder in packages.list) {
  let folderPath = absPath + '/' + packages.list[folder];
  componentsFolder.push(folderPath);
}

module.exports = new TwingEnvironment(
  // Pass all the dirs containing templates as an array.
  new TwingLoaderFilesystem(componentsFolder)
);
