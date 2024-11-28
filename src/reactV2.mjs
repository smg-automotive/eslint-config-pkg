import baseConfig from './index.mjs'; // Import the base config
import react from 'eslint-plugin-react';

export default [
  ...baseConfig,
  {
    plugins: { react },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      // Add or override React-specific rules here
      'react/prop-types': 'off', // Example rule override
    },
  },
];
