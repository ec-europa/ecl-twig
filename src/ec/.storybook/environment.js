const {TwingEnvironment, TwingLoaderFilesystem} = require("twing");
const path = require('path');

module.exports = new TwingEnvironment(
  // Define the root directory where to look for templates.
  new TwingLoaderFilesystem(path.resolve(__dirname + '/../packages/'))
);
