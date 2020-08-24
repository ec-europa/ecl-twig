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
    'import/no-extraneous-dependencies': 0,
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
