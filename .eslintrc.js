'use strict';

module.exports = {
  extends: [
    'thehelp/core',
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
