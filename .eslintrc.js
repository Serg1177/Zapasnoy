const dotenv = require('dotenv');

console.log('------ dot env', dotenv.config());

module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: ['*.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['eslint-plugin-import-helpers', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': process.env.REACT_APP_ENV === 'development' 
    || process.env.REACT_APP_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    'jsx-quotes': ['error', 'prefer-single'],

    '@typescript-eslint/no-empty-interface': 'off',
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreComments: true,
      },
    ],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    semi: ['error', 'always'],
    'import-helpers/order-imports': [
      'error',
      {
        groups: ['/^react$/', 'module', '/^~/', 'parent', ['sibling', 'index']],
        newlinesBetween: 'always',
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
  },
};
