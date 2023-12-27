module.exports = {
    extends: ['semistandard'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    root: true,
    plugins: ['react', '@typescript-eslint'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'no-undef': 'off',
        },
      },
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'comma-dangle': 'off',
      'space-before-function-paren': 'off',
      'no-use-before-define': 'off',
      'spaced-comment': 'warn',
      'no-unreachable': 'warn',
      'no-extra-semi': 'off',
      'multiline-ternary': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  };