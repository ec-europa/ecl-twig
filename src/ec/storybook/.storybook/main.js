const stories = ['../../packages/**/!(*contextual-navigation|eu*).story.js'];

const addons = [
  '@ecl-twig/storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
  '@storybook/addon-options',
  '@storybook/addon-viewport',
  '@storybook/addon-knobs',
];

const managerWebpack = async (baseConfig) => {
  // Exclude node_modules
  baseConfig.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  return baseConfig;
};

module.exports = { stories, addons, managerWebpack };
