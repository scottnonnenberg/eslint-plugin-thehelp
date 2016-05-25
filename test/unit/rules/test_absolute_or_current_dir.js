'use strict';

var RuleTester = require('eslint').RuleTester;

var rule = require('../../../src/rules/absolute_or_current_dir');


var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

ruleTester.run('absolute-or-current-dir with require() calls', rule, {
  valid: [
    'require("fs");',
    'require("./current");',
    'require("root/child/grand");',
    'require("");',
    'require(null);',
    'require();',
    'fn("../peer");',
    'fn("./child/grand");',
  ],
  invalid: [{
    code: 'require("../peer");',
    errors: [{
      message: 'Found .. in require() dependency path: "../peer"',
    }],
  }, {
    code: 'require("./child/grand");',
    errors: [{
      message:
        'Found multilevel relative path in require() dependency path: "./child/grand"',
    }],
  }],
});

ruleTester.run('absolute-or-current-dir with import statements', rule, {
  valid: [
    'import "fs";',
    'import "./current";',
    'import "root/child/grand";',
    'import { value } from "module";',
    'import { value as blah } from "module";',
    'import * as blah from "module";',
  ],
  invalid: [{
    code: 'import "../peer";',
    errors: [{
      message: 'Found .. in import dependency path: "../peer"',
    }],
  }, {
    code: 'import "./child/grand";',
    errors: [{
      message:
        'Found multilevel relative path in import dependency path: "./child/grand"',
    }],
  }],
});
});
