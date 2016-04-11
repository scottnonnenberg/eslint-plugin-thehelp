var dotDot = /\.\./;
var relative = /^\.\//;
var twoSlashes = /\/.+\//;

function checkPath(context, node, type) {
  var path = node.value;

  if (dotDot.test(path)) {
    context.report(node, 'Found .. in ' + type + ' dependency path: "' + path + '"');
  }

  if (relative.test(path) && twoSlashes.test(path)) {
    var message =
      'Found multilevel relative path in ' + type + ' dependency path: "' + path + '"';
    context.report(node, message);
  }
}

module.exports = function(context) {
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
    }
  };
};
