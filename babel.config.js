module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      '@babel/transform-runtime',
      {
        regenerator: true,
      },
    ],
    'preval',
  ],
  sourceType: 'unambiguous',
};
