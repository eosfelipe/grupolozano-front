module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'plugin:prettier/recommended'],
  settings: {
    react: { version: 'detected' }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'no-console': 'error'
  }
}
