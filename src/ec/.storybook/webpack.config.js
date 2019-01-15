module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules\/(?!@ecl-twig\/).*/,
      },
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
