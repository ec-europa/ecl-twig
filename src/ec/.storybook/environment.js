const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');
const path = require('path');
const absPath = path.resolve('src/ec/packages');
let loader = new TwingLoaderFilesystem(absPath);
// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace ecl-twig.
  loader.addPath(absPath, 'ecl-twig');
}

module.exports = new TwingEnvironment(loader);
