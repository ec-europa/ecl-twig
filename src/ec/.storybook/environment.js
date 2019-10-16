const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
const path = require('path');
const packages = require('./ec-packages.js');
const absPath = path.resolve('src/ec/packages');
let loader = new TwingLoaderFilesystem(absPath);
// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  for (let folder in packages.list) {
    let folderPath = absPath + '/' + packages.list[folder];
    // Add namespace ecl-twig.
    loader.addPath(folderPath, 'ecl-twig');
  }
}

module.exports = new TwingEnvironment(loader);
