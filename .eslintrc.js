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
    'unicorn/prevent-abbreviations': false,
    'unicorn/prefer-node-append': false,
  },
  overrides: [
    {
      files: '**/demo/**/*.js',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['src/**/*.{story,test}.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
    {
      files: ['php/**/*.story.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
        camelcase: 0,
        'import/order': false,
      },
    },
    {
      files: ['utils/**/*.{js,jsx}'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
  ],
};
