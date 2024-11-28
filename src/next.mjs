import next from "@next/eslint-plugin-next"

import baseConfig from './react.mjs'; // Import the base config

export default [
  ...baseConfig,
  {plugins: {next}},
  {
    files: ['**/cypress/**/*'],
    rules: {
      'jest/expect-expect': 'off',
      'jest/valid-expect-in-promise': 'off',
      'jest/valid-expect': 'off',
      'jest/no-standalone-expect': 'off',
      'testing-library/await-async-query': 'off',
      'testing-library/prefer-screen-queries': 'off',
      'testing-library/await-async-utils': 'off',
    },
  },
  {
    files: ['**/components/**/*.Test.tsx', '**/components/**/*.Test.jsx'],
    rules: {
      'jest/valid-expect': 'off',
      'jest/expect-expect': 'off',
    },
  },
  {
    files: ['**/pages/**/*.tsx', '**/pages/**/*.jsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: true,
          },
        },
      ],
    },
  },
  {
    files: ['**/__tests__/pages/**/*.tsx', '**/__tests__/pages/**/*.jsx'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
];
