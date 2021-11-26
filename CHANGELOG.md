# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/scottnonnenberg/eslint-plugin-thehelp/compare/v0.4.0...v0.5.0) (2021-11-26)


### ⚠ BREAKING CHANGES

* **rules:** `absolute-or-current-dir` configuration no longer takes
regular expressions, only strings

### Features

* **rules:** Upgrade rules format for eslint 8.x, with full schemas ([eb8e960](https://github.com/scottnonnenberg/eslint-plugin-thehelp/commit/eb8e960b8210ec1e9fe6bbbac7ac731f20dee62e))


### Bug Fixes

* **test:** Fix rule existence test ([425b0cb](https://github.com/scottnonnenberg/eslint-plugin-thehelp/commit/425b0cbf9afecbe01c65a740033bddea4fcc43e2))

<a name="0.4.0"></a>
# [0.4.0](https://github.com/scottnonnenberg/eslint-plugin-thehelp/compare/v0.3.2...v0.4.0) (2016-06-11)


### Features

* **license:** Officially open-source this project under MIT license ([1c0105c](https://github.com/scottnonnenberg/eslint-plugin-thehelp/commit/1c0105c))
* **name:** Add scoping to project name ([ffa1b94](https://github.com/scottnonnenberg/eslint-plugin-thehelp/commit/ffa1b94))
* **package.json:** Update repository, license, author, keywords ([8aeda9b](https://github.com/scottnonnenberg/eslint-plugin-thehelp/commit/8aeda9b))


<a name="0.3.2"></a>
## 0.3.2 (2016-06-03)

* `no-mutation` now allows `{ object: 'this' }` exceptions
* Add `@scottnonnenberg` scoping to project name


<a name="0.3.1"></a>
## 0.3.1 (2016-06-02)

* Export `no-array-mutation` rule via index (added tests to help catch this in the future)


<a name="0.3.0"></a>
# 0.3.0 (2016-06-02)

* New rule: `no-mutation` - taken from https://github.com/jhusain/eslint-plugin-immutable/pull/15
* New rule: `no-array-mutation` - taken from https://github.com/jhusain/eslint-plugin-immutable/pull/5/files
* Add history of changes
* Add readme and detailed rule documentation


<a name="0.2.0"></a>
# 0.2.0 (2016-05-25)

* `absolute-or-current-dir` now accepts an `exceptions` configuration option to reduce the number of `eslint-disable` comments in projects


<a name="0.1.1"></a>
## 0.1.1 (2016-04-10)

* `absolute-or-current-dir` now reports on the dependency path, not the `import` or `require()` call
* npm package trimmed down


<a name="0.1.0"></a>
# 0.1.0 (2016-04-05)

* First version of this plugin! One rule included: `absolute-or-current-dir`
