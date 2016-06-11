'use strict';

module.exports = {
  extends: [
    '@scottnonnenberg/thehelp/core',
  ],

  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },

  rules: {
    'security/detect-object-injection': 'off',
  },
};
