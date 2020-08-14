module.exports = ({ config: defaultConfig }) => {
  // Make it less verbose
  defaultConfig.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      defaultConfig.plugins.splice(i, 1);
    }
  });

  return defaultConfig;
};
