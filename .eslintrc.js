module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'prettier',
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
    'import/no-extraneous-dependencies': 0,
    // Eslint 8 - These excludes should be removed after refactoring code.
    'no-restricted-syntax': 0,
    'no-restricted-exports': 0,
    'import/no-relative-packages': 0,
    'unicorn/prefer-module': 0,
    'unicorn/no-empty-file': 0,
    'unicorn/consistent-destructuring': 0,
    'no-continue': 0,
    'unicorn/no-array-reduce': 0,
    'prefer-const': 0,
    'no-promise-executor-return': 0,
    'no-duplicate-case': 0,
    'no-unused-vars': 0,
  },
  overrides: [
    {
      files: 'utils/ecl-diff/**/*.js',
      rules: {
        'no-console': 0,
        'unicorn/no-reduce': 0,
        'no-param-reassign': 0,
        'default-case': 0,
      },
    },
    {
      files: '**/demo/*.js',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['src/**/*.{story,test}.js', 'src/**/packages/**/adapter.js'],
      rules: {
        'no-param-reassign': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['php/**/*.story.js'],
      rules: {
        camelcase: 0,
        'import/order': 0,
      },
    },
  ],
};
