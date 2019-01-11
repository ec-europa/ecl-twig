module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: 'twig-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
};
