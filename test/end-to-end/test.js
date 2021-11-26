'use strict';

// eslint-disable-next-line absolute_or_current_dir
var rule = require('../../src/rules/no_mutation');
console.log(rule);

// eslint-disable-next-line absolute_or_current_dir
var name = require('./child/name');
console.log(name);

var array = [1, 2, 3, 4, 5, 6];
// eslint-disable-next-line no_array_mutation
array.sort();
console.log(array);
