module.exports = {
  extends: ['airbnb', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'prettier/prettier': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/destructuring-assignment': [0, 'always'],
    'react/prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': ['error', { code: 130 }],
  },
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      //   webpack: {
      //     config: './webpack.config.js',
      // },
      node: {
        extension: ['.tsx', '.ts', 'jsx', 'js'],
      },
    },
  },
};
