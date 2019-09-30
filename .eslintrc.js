module.exports = {
  root: true,
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
    'plugin:jest/recommended',
    'twig',
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
      files: ['src/**/*.{story,test}.js'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
    {
      files: ['utils/**/*.{js,jsx}'],
      rules: {
        'import/no-extraneous-dependencies': false,
      },
    },
    {
      files: ['src/**/*twig'],
      rules: {
        'no-console': 2,
      },
    },
  ],
};
