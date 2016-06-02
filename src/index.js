/* eslint-disable global-require */

'use strict';

module.exports = {
  rules: {
    'absolute-or-current-dir': require('./rules/absolute_or_current_dir'),
    'no-mutation': require('./rules/no_mutation'),
    'no-array-mutation': require('./rules/no_array_mutation'),
  },
};
