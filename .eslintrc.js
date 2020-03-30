module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'space-before-function-paren': 0,
    'Block must not be padded by blank lines': 0,
    'indent': ["off", 2],
    'arrow-parens': 0,
    'no-unused-vars': 0,
    // 要求使用分号代替 ASI
    // 'semi':['error','always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
