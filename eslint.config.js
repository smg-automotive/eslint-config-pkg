import baseConfig from "./src/reactV2.mjs"; // Import the index configuration

export default [
  ...baseConfig,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.json"],
    settings: {
      jest: {
        version: 28, // Add Jest settings
      },
    },
    rules: {
      // Include any project-specific rules here
    },
  },
];
