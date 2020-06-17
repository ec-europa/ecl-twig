const path = require('path');

const stories = ['../../packages/**/*.story.js'];

const addons = [
  '@storybook/addon-options',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
];

const managerEntries = [
  path.resolve('utils/storybook-addon-code/src/register'),
  path.resolve('utils/storybook-addon-notes/src/register'),
];

const managerWebpack = async baseConfig => {
  // Exclude node_modules
  baseConfig.module.rules[0].include = /node_modules\/ecl-twig\/.*/;

  return baseConfig;
};

module.exports = { stories, addons, managerEntries, managerWebpack };
