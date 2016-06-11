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
