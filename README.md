# @scottnonnenberg/eslint-plugin-thehelp

A collection of rules with no other good place.

## Install

```bash
npm install @scottnonnenberg/eslint-plugin-thehelp --save-dev
```

In your [`eslint`](http://eslint.org/) configuration:

```json
{
  "plugins": ["@scottnonnenberg/thehelp"],
  "rules": {
    "thehelp/absolute-or-current-dir": "error",
  },
}
```

_Note: rules DO NOT include the @scottnonnenberg prefix, even though you might think they should._

And that's it! Details for each rule below.

## Rules:

- [`thehelp/absolute-or-current-dir`](doc/absolute_or_current_dir.md) - all `require()` or `import` calls must either refer to absolute paths or the current directory ('./peer'). Goodbye `../../../`!
- [`thehelp/no-mutation`](doc/no_mutation.md) - prevents mutation of object values, pushing you to a more functional style. `exceptions` configuration allows CommonJS compatibility.
- [`thehelp/no-array-mutation`](doc/no_array_mutation.md) - looks for object calls (`obj.call()`) with function names taken from the list of mutating array methods.
