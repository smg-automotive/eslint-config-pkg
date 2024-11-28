import globals from 'globals';
import testingLibrary from "eslint-plugin-testing-library"
import hooks from "eslint-plugin-react-hooks"
import react from 'eslint-plugin-react';
import cypress from "eslint-plugin-cypress"


import baseConfig from './index.mjs'; // Import the base config

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: { react, "react-hooks": hooks, "testing-library": testingLibrary, cypress },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            pascalCase: true,
          },
          multipleFileExtensions: false,
          ignore: ['index.(j|t)sx'],
        },
      ],
    },
  },
];
