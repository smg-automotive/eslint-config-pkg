require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'import', 'jest', 'unicorn', 'sonarjs'],
  ignorePatterns: ['dist'],
  overrides: [
    {
      files: [
        '**/locales/**',
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)*',
        'package-lock.json',
        '**/config/**',
        '**/cypress/**',
      ],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
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
    {
      files: ['*.ts'],
      rules: {
        'no-shadow': 'off',
      },
    },
  ],
  rules: {
    'sonarjs/max-switch-cases': ['error', 15],
    'sonarjs/prefer-immediate-return': 'off',
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
    'prettier/prettier': ['error', require('./prettierOptions')],
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
};
