module.exports = {
    rules: {
      'no-console-log': {
        create: function (context) {
          return {
            CallExpression(node) {
              // 检查是否是 console.log
              if (
                node.callee.type === 'MemberExpression' &&
                node.callee.object.name === 'console' &&
                node.callee.property.name === 'log'
              ) {
                context.report({
                  node,
                  message: 'Unexpected console.log statement.',
                });
              }
            },
          };
        },
      },
    },
  };