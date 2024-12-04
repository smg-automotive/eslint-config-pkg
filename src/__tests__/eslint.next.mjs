import baseConfig from '../next.mjs';

export default [
  ...baseConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    }
    },
  { files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'] },
];
