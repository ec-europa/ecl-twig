const webPackFinal = require('./webpack.config.js');

const stories = ['../../packages/**/!(*contextual-navigation|eu*).story.js'];

const addons = [
  '@ecl-twig/storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
  '@storybook/addon-viewport',
  '@storybook/addon-knobs',
];

module.exports = {
  stories,
  addons,
  webPackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: webPackFinal.module.rules },
    };
  },
};
