/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
  ],
  plugins: ['react', 'testing-library'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
  },
};
