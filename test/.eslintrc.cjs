const noConsole = require('@extremelyjs/eslint-plugin-no-console-log')

module.exports = {
    plugins: [noConsole],
    rules: {
      noConsole: 'error',
    },
};