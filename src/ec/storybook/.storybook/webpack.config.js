const path = require('path');

module.exports = ({ config: defaultConfig, mode }) => {
  // Trick "babel-loader", force it to transpile @ecl-twig addons
  defaultConfig.module.rules[0].include = /node_modules\/ecl-twig\/.*/;
  defaultConfig.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname + '/environment.js'),
    },
  });
  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (4th plugin)
    const plugin = defaultConfig.plugins.splice(3, 1);
    if (!(plugin[0].constructor.name === 'ProgressPlugin')) {
      console.error(
        'Error: 4th plugin is not ProgressPlugin.\nCheck src/systems/ec/implementations/react/storybook/.storybook/webpack.config.js'
      );
      return process.exit(1);
    }
  }

  return defaultConfig;
};
