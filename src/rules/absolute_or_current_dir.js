'use strict';

var dotDot = /\.\./;
var relative = /^\.\//;
var twoSlashes = /\/.+\//;

function checkExceptions(options, path) {
  var first = options[0] || {};
  var exceptions = first.exceptions || [];

  for (var i = 0, length = exceptions.length; i < length; i += 1) {
    var exception = exceptions[i];

    if (exception === path) {
      return true;
    }
    if (path.endsWith(exception)) {
      return true;
    }
  }

  return false;
}


function checkPath(context, node, type) {
  var path = node.value;

  if (checkExceptions(context.options, path)) {
    return;
  }

  if (dotDot.test(path)) {
    context.report(node, 'Found .. in ' + type + ' dependency path: "' + path + '"');
  }

  if (relative.test(path) && twoSlashes.test(path)) {
    var message =
      'Found multilevel relative path in ' + type + ' dependency path: "' + path + '"';
    context.report(node, message);
  }
}

module.exports = {
  meta: {
    type: 'suggestion',

    docs: {
      description: 'Prevents confusing and error-prone deep path traversal in your imports',
      url: 'https://github.com/scottnonnenberg/eslint-plugin-thehelp/blob/master/doc/absolute_or_current_dir.md',
    },

    schema: [{
      type: 'object',
      properties: {
        exceptions: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    }],
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.name === 'require') {
          if (!node.arguments.length) {
            return;
          }

          var target = node.arguments[0];
          checkPath(context, target, 'require()');
        }
      },
      ImportDeclaration: function(node) {
        checkPath(context, node.source, 'import');
      },
    };
  },
};

