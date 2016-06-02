'use strict';

var RuleTester = require('eslint').RuleTester;

var rule = require('src/rules/no_array_mutation');


var ruleTester = new RuleTester();

ruleTester.run('no-array-mutation', rule, {
  valid: [
    'obj.y(4);',
    'y.call(obj, 4);',
    'y.apply(obj, [4]);',
    'y(4);',
    'splice(obj);',
  ],
  invalid: [{
    code: 'obj.copyWithin();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.fill();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.push();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.pop();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.reverse();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.shift();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.sort();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.splice();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }, {
    code: 'obj.unshift();',
    errors: [{
      message: 'No array mutation allowed.',
    }],
  }],
});
