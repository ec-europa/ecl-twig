module.exports = ({ config, mode }) => {
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
