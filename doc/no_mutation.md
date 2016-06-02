# Rule: `thehelp/no-mutation`

This rule is designed to push you towards more functional design, where methods don't modify the data passed into them. It makes programs far, far easier to reason about. Not allowed:

```javascript
obj.x = 4; # invalid
module.exports = fn; # invalid
this.name = 'name'; # invalid
```

## Configuration

Yes, some kinds of mutation are required. Like `module.exports`, necessary to expose your code to other files via `require()`. To enable this without a tedious `eslint-disable` on every affected line, you can use `exceptions`:

```javascript
{
  'thehelp/no-mutation': ['error', {
    exceptions: [{
      object: 'module',
      property: 'exports',
    }, {
      property: 'propTypes',
    }, {
      object: 'this',
    }]
  }]
}
```

Each exception can specify one or both of `object` and `property`. If only one is specified, everything which matches that single check will be excluded from the rule. All values are strings, and matched exactly.
