// eslint-disable-next-line import/no-unresolved
import tseslint from 'typescript-eslint';
import globals from 'globals';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import prettier from 'eslint-plugin-prettier/recommended';
import jest from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  sonarjs.configs.recommended,
  {
    ignores: ['dist', 'coverage/*'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2020,
        ...globals.builtin,
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
      unicorn,
    },
    settings: {
      'import/external-module-folders': ['node_modules'],
    },
    rules: {
      'sonarjs/max-switch-cases': ['error', 15],
      'sonarjs/no-empty-function': 'off',
      'sonarjs/no-unused-expressions': 'off',
      'sonarjs/todo-tag': 'warn',
      'sonarjs/fixme-tag': 'warn',
      'sonarjs/jsx-no-constructed-context-values': 'warn',
      'sonarjs/no-array-index-key': 'warn',
      'sonarjs/unused-import': 'off',
      'sonarjs/sonar-no-unused-vars': 'off',
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
      'import/no-unresolved': 'error',
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
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-shadow': 'error',
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
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      '**/?(*.)+(spec|test).{js,jsx,ts,tsx}',
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
    files: ['**/*.json'],
    rules: { '@typescript-eslint/no-unused-expressions': 'off' },
  },
  {
    files: ['**/__tests__/**/*.[jt]s?(x)'],
    rules: {
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/jsx-no-useless-fragment': 'off',
      'sonarjs/no-clear-text-protocols': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.js'],
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
    files: ['**/*.{ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
    rules: {
      'no-shadow': 'off',
      'no-unused-vars': 'off',
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
