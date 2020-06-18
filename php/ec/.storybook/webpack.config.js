module.exports = ({ config: defaultConfig, mode }) => {
  // Make it less verbose
  if (mode === 'PRODUCTION') {
    // Remove ProgressPlugin (4th plugin)
    const plugin = defaultConfig.plugins.splice(3, 1);
    if (plugin[0].constructor.name !== 'ProgressPlugin') {
      defaultConfig.plugins.push(plugin[0]);
    }
  }

  return defaultConfig;
};
