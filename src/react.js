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
    'plugin:cypress/recommended',
  ],
  plugins: ['react', 'testing-library', 'unicorn'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
  },
  overrides: [
    {
      files: ['**/components/**/*.tsx', '**/components/**/*.jsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              pascalCase: true,
            },
            ignore: ['index.(j|t)sx'],
          },
        ],
      },
    },
  ],
};
