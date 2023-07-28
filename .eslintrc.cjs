module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:effector/recommended',
    'plugin:react/recommended',
    'plugin:effector/scope',
    'react-app'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'effector'
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 'off',
    indent: ['error', 2],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'react/display-name': 'off',
    'no-use-before-define': 'off',
    'react/no-unknown-property': [
      'error', {
        ignore: [
          'playsinline'
        ]
      }],
    camelcase: ['error', {
      properties: 'never',
      ignoreDestructuring: true
    }],
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/destructuring-assignment': 'off'
  }
};
