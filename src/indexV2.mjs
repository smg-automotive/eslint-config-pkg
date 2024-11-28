import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import sonarjs from 'eslint-plugin-sonarjs';
import js from '@eslint/js';
import prettierOptions from './prettierOptions.js';

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier,
      import: importPlugin,
      jest,
      sonarjs: sonarjs.configs['recommended-legacy'],
    },
    rules: {
      //'sonarjs/max-switch-cases': ['error', 15],
      'no-console': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling'],
            ['index', 'object'],
          ],
          alphabetize: {
            order: 'desc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
          allowSeparatedGroups: true,
        },
      ],
      //'prettier/prettier': ['error', prettierOptions],
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-shadow': 'off',
      //'@typescript-eslint/no-shadow': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../*'],
              message: 'Usage of relative parent imports is not allowed.',
            },
          ],
        },
      ],
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
  {
    files: ['*.ts'],
    rules: {
      'no-shadow': 'off',
    },
  },
];
