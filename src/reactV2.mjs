import react from 'eslint-plugin-react';

import baseConfig from './index.mjs'; // Import the base config

export default [
  ...baseConfig,
  {
    plugins: { react },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {},
  },
];
