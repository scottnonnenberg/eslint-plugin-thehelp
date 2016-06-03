'use strict';


function compare(object, property, exception) {
  var objectMatch = object === exception.object;
  var propertyMatch = property === exception.property;

  if (exception.object && exception.property) {
    if (objectMatch && propertyMatch) {
      return true;
    }
  }
  else if (exception.object) {
    if (objectMatch) {
      return true;
    }
  }
  else if (exception.property) {
    if (propertyMatch) {
      return true;
    }
  }

  return false;
}

function getObject(node) {
  if (node.object.type === 'ThisExpression') {
    return 'this';
  }

  return node.object.name;
}

function checkExceptions(node, exceptions) {
  if (!exceptions || !exceptions.length) {
    return false;
  }

  var object = getObject(node.left);
  var property = node.left.property.name;

  for (var i = 0, length = exceptions.length; i < length; i += 1) {
    var exception = exceptions[i];

    if (exception && compare(object, property, exception)) {
      return true;
    }
  }

  return false;
}

module.exports = checkExceptions;

module.exports = function(context) {
  return {
    AssignmentExpression: function(node) {
      var options = context.options[0] || {};
      var exceptions = options.exceptions || [];

      if (node.left.type !== 'MemberExpression') {
        return;
      }

      if (checkExceptions(node, exceptions)) {
        return;
      }

      context.report(node, 'No object mutation allowed.');
    },
  };
};
