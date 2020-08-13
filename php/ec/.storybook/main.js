const webPackFinal = require('./webpack.config.js');

let system = 'ec';
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  system = 'eu';
}
const stories = [`../../packages/${system}/**/*.story.js`];

const addons = [
  '@storybook/addon-viewport',
  '@ecl-twig/storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
  '@ecl-twig/storybook-addon-jscode/src/register',
  '@ecl-twig/storybook-addon-diff/src/register',
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
