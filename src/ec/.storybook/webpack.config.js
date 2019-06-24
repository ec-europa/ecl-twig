const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader',
  });

  // Trick "babel-loader", force it to transpile @ecl-twig addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (4th plugin)
    const plugin = config.plugins.splice(3, 1);

    if (!(plugin[0] instanceof webpack.ProgressPlugin)) {
      console.error(
        'Error: 4th plugin is not ProgressPlugin.\nCheck src/systems/ec/implementations/react/storybook/.storybook/webpack.config.js'
      );
      return process.exit(1);
    }
  }

  return config;
};
