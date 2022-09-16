module.exports = {
  extends: ['./react.js', 'next/core-web-vitals'],
  plugins: ['@next/eslint-plugin-next'],
  parser: '@typescript-eslint/parser',
  overrides: [
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
  ],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        allow: ['*/*'],
      },
    ],
  },
};
