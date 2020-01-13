module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'jsx-a11y'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'unicorn/prevent-abbreviations': 0,
    'unicorn/prefer-node-append': 0,
  },
  overrides: [
    {
      files: '**/demo/*.js',
      rules: {
        'unicorn/filename-case': 'off',
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['src/**/*.{story,test}.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['php/**/*.story.js'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        camelcase: 0,
        'import/order': 0,
      },
    },
    {
      files: ['utils/**/*.{js,jsx}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
