const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/,
        loader: 'twig-loader',
        options: {
          // See options section below
        },
      },
    ],
  },
  node: {
    fs: 'empty', // avoids error messages
  },
};
