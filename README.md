# @scottnonnenberg/eslint-plugin-thehelp

A collection of rules with no other good place.

Blog post announcing this project: https://blog.scottnonnenberg.com/eslint-part-2-contribution/

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

## Contributing

This project uses [`standard-version`](https://github.com/conventional-changelog/standard-version) to release new versions, automatically updating the version number and [changelog](https://github.com/scottnonnenberg/eslint-plugin-thehelp/blob/master/CHANGELOG.md) based on commit messages in [standard format](https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md). [`ghooks`](https://github.com/gtramontina/ghooks) and [`validate-commit-msg`](https://github.com/kentcdodds/validate-commit-msg) are used to ensure all commit messages match the expected format (see [package.json](https://github.com/scottnonnenberg/eslint-plugin-thehelp/blob/master/package.json) for the configuration details).

It takes some getting used to, but this configuration is absolutely worthwhile. A changelog is way easier to understand than the chaos of a raw commit stream, especially with `standard-version` providing direct links to bugs, commits and [commit ranges](https://github.com/scottnonnenberg/eslint-plugin-thehelp/compare/v0.3.2...v0.4.0).

## License

(The MIT license)

Copyright (c) 2016 Scott Nonnenberg <scott@nonnenberg.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
