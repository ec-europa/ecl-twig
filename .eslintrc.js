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
  },
  overrides: [
    {
      files: ['src/**/*.{story,test}.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
    {
      files: ['utils/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
  ],
};
