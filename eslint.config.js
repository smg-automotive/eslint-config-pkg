import baseConfig from './src/index.mjs'; // Import the index configuration

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.json'],
    settings: {
      jest: {
        version: 28, // Add Jest settings
      },
    },
  },
];
