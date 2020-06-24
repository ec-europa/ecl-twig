const path = require('path');

module.exports = ({ config: defaultConfig, mode }) => {
  // Trick "babel-loader", force it to transpile @ecl-twig addons
  defaultConfig.module.rules[0].exclude.push(/node_modules\/(?!@ecl-twig\/).*/);
  defaultConfig.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname + '/environment.js'),
    },
  });
  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (5th plugin)
    const plugin = defaultConfig.plugins.splice(4, 1);
    if (plugin[0].constructor.name !== 'ProgressPlugin') {
      defaultConfig.plugins.push(plugin[0]);
    }
  }

  return defaultConfig;
};
