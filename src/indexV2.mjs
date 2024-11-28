import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import sonarjs from 'eslint-plugin-sonarjs';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier,
      import: importPlugin,
      jest,
      sonar: sonarjs.configs['recommended-legacy'],
    },
    rules: {
      // Add your base JavaScript rules here
    },
  },
];
