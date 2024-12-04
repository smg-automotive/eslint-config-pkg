import baseConfig from './src/index.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.json'],
    settings: {
      jest: {
        version: 28,
      },
    },
  },
];
