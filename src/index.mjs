// TODO: install sonarjs once supported https://github.com/SonarSource/eslint-plugin-sonarjs/issues/438
import tseslint from 'typescript-eslint';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

// FIXME: sonarjs
//import sonarjs from 'eslint-plugin-sonarjs';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      import: importPlugin,
      jest,
      // FIXME: sonarjs
      //sonarjs: sonarjs.configs['recommended-legacy'],
    },
    rules: {
      // FIXME: sonarjs
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
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
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
  {
    files: ['*.ts?(x)'],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: true,
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint'],
    rules: {
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
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          // Ignore properties that require quotes
          selector: [
            'classProperty',
            'objectLiteralProperty',
            'typeProperty',
            'classMethod',
            'objectLiteralMethod',
            'typeMethod',
            'accessor',
            'enumMember',
          ],
          format: null,
          modifiers: ['requiresQuotes'],
        },
      ],
    },
  },
  prettier,
];
