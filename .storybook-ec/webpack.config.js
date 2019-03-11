module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twig-loader',
  });

  // Trick "babel-loader", force it to transpile @ecl-twig addons
  // config.module.rules[0].exclude = /node_modules\/(?!@ecl-twig\/).*/; // is it necessary??

  return config;
};
