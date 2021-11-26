'use strict';

var RuleTester = require('eslint').RuleTester;

var rule = require('src/rules/no_mutation');


var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('no-mutation', rule, {
  valid: [
    'const x = obj.y;',
    'const { x, y } = obj;',
    'export const x = 4;',
    'export const { x, y } = obj;',
    'x = 4;', {
      code: 'module.exports = fn;',
      options: [{
        exceptions: [{
          object: 'module',
          property: 'exports',
        }],
      }],
    }, {
      code: 'module.x = fn;',
      options: [{
        exceptions: [{
          object: 'module',
        }],
      }],
    }, {
      code: 'x.exports = fn;',
      options: [{
        exceptions: [{
          property: 'blah',
        }, {
          property: 'exports',
        }],
      }],
    }, {
      code: 'function save(x) { this.x = x; }',
      options: [{
        exceptions: [{
          object: 'this',
        }],
      }],
    },
  ],
  invalid: [{
    code: 'obj.x = "no exceptions";',
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "empty options object";',
    options: [{}],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "empty exception array";',
    options: [{
      exceptions: [],
    }],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "empty exception";',
    options: [{
      exceptions: [{}],
    }],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "non-matching exceptions";',
    options: [{
      exceptions: [{
        object: 'obj',
        property: 'y',
      }, {
        object: 'item',
        property: 'x',
      }],
    }],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "non-matching object exception";',
    options: [{
      exceptions: [{
        object: 'item',
      }],
    }],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }, {
    code: 'obj.x = "non-matching property exception";',
    options: [{
      exceptions: [{
        property: 'y',
      }],
    }],
    errors: [{
      message: 'No object mutation allowed.',
    }],
  }],
});
