## 0.3.2 (2016-06-03)

* `no-mutation` now allows `{ object: 'this' }` exceptions
* Add `@scottnonnenberg` scoping to project name

## 0.3.1 (2016-06-02)

* Export `no-array-mutation` rule via index (added tests to help catch this in the future)

## 0.3.0 (2016-06-02)

* New rule: `no-mutation` - taken from https://github.com/jhusain/eslint-plugin-immutable/pull/15
* New rule: `no-array-mutation` - taken from https://github.com/jhusain/eslint-plugin-immutable/pull/5/files
* Add history of changes
* Add readme and detailed rule documentation

## 0.2.0 (2016-05-25)

* `absolute-or-current-dir` now accepts an `exceptions` configuration option to reduce the number of `eslint-disable` comments in projects

## 0.1.1 (2016-04-10)

* `absolute-or-current-dir` now reports on the dependency path, not the `import` or `require()` call
* npm package trimmed down

## 0.1.0 (2016-04-05)

* First version of this plugin! One rule included: `absolute-or-current-dir`
