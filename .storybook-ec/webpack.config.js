module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader',
  });

  config.devtool = 'source-map';
  config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/;

  return config;
};
