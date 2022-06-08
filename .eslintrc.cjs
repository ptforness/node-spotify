module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['lib/**/*', '.eslintrc.cjs'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off'
  },
};
