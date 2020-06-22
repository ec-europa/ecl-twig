const stories = ['../../packages/**/!(*contextual-navigation).story.js'];

const addons = [
  '@storybook/addon-options',
  '@storybook/addon-knobs',
  '@storybook/addon-viewport',
];

const managerEntries = [
  '@ecl-twig//storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
];

const managerWebpack = async baseConfig => {
  // Exclude node_modules
  baseConfig.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  return baseConfig;
};

module.exports = { stories, addons, managerEntries, managerWebpack };
