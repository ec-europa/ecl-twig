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
  '@ecl-twig/storybook-addon-ecl-diff/src/register',
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl-twig addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;
  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  stories,
  addons,
  webpackFinal,
};
