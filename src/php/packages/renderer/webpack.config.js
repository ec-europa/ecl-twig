const path = require('path');
require('babel-register');

module.exports = {
  optimization: {
    minimize: false,
  },
  target: 'node',
  entry: ['./scripts/src/index.js'],
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: 'generate-data.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  node: { fs: 'empty' },
};
