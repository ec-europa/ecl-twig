module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['src/**/*.story.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
  ],
};
