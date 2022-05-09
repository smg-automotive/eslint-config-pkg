/* eslint-disable @typescript-eslint/naming-convention */

// eslint-disable-next-line import/no-internal-modules
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'jest'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  rules: {
    'no-console': 'error',
    'import/no-internal-modules': 'error',
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
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'prettier/prettier': ['error', require('./prettier-options')],
  },
};
