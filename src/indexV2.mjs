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
  },
  {
    files: [
      '**/locales/**',
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)*',
      'package-lock.json',
      '**/*.json',
      '**/config/**',
      '**/cypress/**',
    ],
    rules: {
      'sonarjs/no-duplicate-string': 'off',
      'import/no-named-as-default': 'off',
    },
  },
  {
    files: ['*.ts', '*.js'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
          },
        },
      ],
    },
  },
];
