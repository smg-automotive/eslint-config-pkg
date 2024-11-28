require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['prettier', 'import', 'jest', 'unicorn', 'sonarjs'],
  overrides: [
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
  ],
};
