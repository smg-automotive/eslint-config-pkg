import next from '@next/eslint-plugin-next';

import baseConfig from './react.mjs';

export default [
  ...baseConfig,
  {
    ignores: ['.next/', 'next-env.d.ts'],
  },
  {
    plugins: { '@next/next': next },
  },
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
      'testing-library/await-async-queries': 'off',
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
    files: [
      '**/__tests__/pages/**/*.tsx',
      '**/__tests__/pages/**/*.jsx',
      '**/app/**/page.tsx',
      '**/app/**/loading.tsx',
      '**/app/**/default.tsx',
      '**/app/**/layout.tsx',
      '**/app/global-error.tsx',
      '**/app/**/not-found.tsx',
      '**/app/**/error.tsx',
    ],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
];
