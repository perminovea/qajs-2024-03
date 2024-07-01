module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    cy: true
  },
  extends: ['standard', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['tests/**/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
    },
    {
      files: ['cypress/**/*.js'],
      plugins: ['cypress'],
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off', // 'warn',
        'no-unused-expressions': 'off' // 'warn'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
}
