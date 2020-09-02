module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/explicit-length-check': ['error'],
    'unicorn/new-for-builtins': ['error'],
    'unicorn/filename-case': 0,
    'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
    'vue/html-closing-bracket-spacing': ['error', { startTag: 'never', endTag: 'never', selfClosingTag: 'always' }],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-unused-components': ['error', { ignoreWhenBindingPresent: true }],
    'vue/no-v-html': 0,
    'require-unicode-regexp': 0,
    'id-blacklist': 0,
    'quote-props': ['error', 'as-needed'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'max-lines-per-function': ['error', { max: 24, skipBlankLines: true }],
    'max-len': [1, 100, { ignoreUrls: true, ignoreStrings: true, tabWidth: 2 }],
    'promise/prefer-await-to-then': 0,
    'prefer-template': 0,
    'lines-between-class-members': 0,
    'id-length': ['error', { exceptions: ['_'] }],
    radix: 0,
    semi: ['error', 'never'],
    'import/newline-after-import': ['error']
  }
}
