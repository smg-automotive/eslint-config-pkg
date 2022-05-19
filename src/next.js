module.exports = {
  extends: ['./react.js', 'next/core-web-vitals'],
  plugins: ['@next/eslint-plugin-next'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-internal-modules': [
      'error',
      {
        allow: ['next/*'],
      },
    ],
  },
};
