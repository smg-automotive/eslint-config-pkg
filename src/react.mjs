import globals from 'globals';
import testingLibrary from 'eslint-plugin-testing-library';
import hooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';
import cypress from 'eslint-plugin-cypress';
import { fixupPluginRules } from '@eslint/compat';

import baseConfig from './index.mjs'; // Import the base config

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(hooks),
      'testing-library': fixupPluginRules(testingLibrary),
      cypress: fixupPluginRules(cypress),
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'react/jsx-no-constructed-context-values': 'warn',
      'react/no-array-index-key': 'warn',
      'testing-library/no-await-sync-events': [
        'error',
        { eventModules: ['fire-event'] },
      ],
      'react/no-unknown-property': ['error', { ignore: ['global', 'jsx'] }],
    },
  },
  {
    files: ['**/*.jsx'],
    rules: {
      'react/prop-types': ['error'],
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "JSXOpeningElement[name.name='form']:not(:has(JSXAttribute[name.name='method']))",
          message:
            'Forms must explicitly set method="post" to avoid the native browser GET fallback.',
        },
        {
          selector:
            "JSXOpeningElement[name.name='form'] > JSXAttribute[name.name='method']:not([value.type='Literal'][value.value='post'])",
          message:
            'Forms must explicitly set method="post" to avoid the native browser GET fallback.',
        },
      ],
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
