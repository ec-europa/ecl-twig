const path = require('path');

module.exports = ({ config, mode }) => {
  // Babel loader is the first rule
  config.module.rules[0].include.push(path.resolve(__dirname, '../../..'));
  config.module.rules[0].exclude = /node_modules\/(?![twing|twing-loader|@ecl-twig])/;

  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname + '/environment.js'),
    },
  });

  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (4th plugin)
    const plugin = config.plugins.splice(3, 1);
    if (!(plugin[0].constructor.name === 'ProgressPlugin')) {
      console.error(
        'Error: 4th plugin is not ProgressPlugin.\nCheck src/systems/ec/implementations/react/storybook/.storybook/webpack.config.js'
      );
      return process.exit(1);
    }
  }

  return config;
};
