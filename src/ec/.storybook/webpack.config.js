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
        test: /\.(svg|png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name]-[hash:8].[ext]',
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
