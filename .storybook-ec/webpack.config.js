module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader',
  });

  config.devtool = 'source-map';

  // console.log(config.devtool);
  // process.exit();

  return config;
};
