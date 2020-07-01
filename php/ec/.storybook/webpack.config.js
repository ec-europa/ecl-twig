module.exports = ({ config: defaultConfig, mode }) => {
  // Make it less verbose
  if (mode === 'PRODUCTION') {
    defaultConfig.plugins.forEach((plugin, i) => {
      if (plugin.constructor.name === 'ProgressPlugin') {
        defaultConfig.plugins.splice(i, 1);
      }
    });
  }

  return defaultConfig;
};
