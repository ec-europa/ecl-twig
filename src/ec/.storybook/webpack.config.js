const webpack = require('webpack');
const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname + '/environment.js')
    }
  });

  // Trick "babel-loader", force it to transpile @ecl-twig addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  // Make it less verbose
  if (mode === 'PRODUCTION') {
    for (let i = 0; i < config.plugins.length; i += 1) {
      if (config.plugins[i] instanceof webpack.ProgressPlugin) {
        // Remove ProgressPlugin.
        config.plugins.splice(i, 1);
      }
    }
  }

  return config;
};
