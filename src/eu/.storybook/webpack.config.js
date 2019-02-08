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
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/icons.svg',
            },
          },
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
};
