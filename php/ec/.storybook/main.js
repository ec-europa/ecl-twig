let system = 'ec';
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  system = 'eu';
}
const stories = [`../../packages/${system}/**/*.story.js`];

const addons = [
  '@storybook/addon-options',
  '@storybook/addon-viewport',
  '@ecl-twig/storybook-addon-notes/src/register',
  '@ecl-twig/storybook-addon-code/src/register',
  '@ecl-twig/storybook-addon-jscode/src/register',
  '@ecl-twig/storybook-addon-diff/src/register',
];

const managerWebpack = async baseConfig => {
  // Exclude node_modules
  baseConfig.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  return baseConfig;
};

module.exports = { stories, addons, managerWebpack };
