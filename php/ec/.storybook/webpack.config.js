module.exports = ({ config: defaultConfig, mode }) => {
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
