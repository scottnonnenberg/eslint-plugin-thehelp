module.exports = {
  "env": {
    "commonjs": true,
    "node": true,
    "mocha": true
  },

  "extends": [
    "eslint:recommended",
  ],

  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-console": [0]
  }
};
