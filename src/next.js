module.exports = {
  extends: ['./react.js', 'next/core-web-vitals'],
  plugins: ['@next/eslint-plugin-next'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/__tests__/pages/**/*.test.tsx'],
      rules: {
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
      },
    },
  ],
  rules: {
    'import/no-internal-modules': [
      'error',
      {
        allow: ['next/*'],
      },
    ],
  },
};
