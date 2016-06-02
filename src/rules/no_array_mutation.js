'use strict';

// Per MDN, these are the mutating array methods
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
var arrayMethodPattern =
  /^(?:copyWithin|fill|push|pop|reverse|shift|sort|splice|unshift)$/;

module.exports = function(context) {
  return {
    Identifier: function(node) {
      if (node.parent.type === 'MemberExpression'
        && node.parent.parent.callee === node.parent
        && arrayMethodPattern.test(node.name)) {
        context.report(node, 'No array mutation allowed.');
      }
    },
  };
};
