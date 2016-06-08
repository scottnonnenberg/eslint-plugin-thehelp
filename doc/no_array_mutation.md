# Rule: `thehelp/no-array-mutation`

Arrays in javascript are hugely useful. However, it's all too easy to modify them. Some array methods mutate even if you might not expect them to:

```javascript
arr.sort(compareFn); # invalid
arr.splice(1, 2); # invalid
```

Any code of the form `obj.call()` will be inspected, and the name of the method will be matched against this list of methods, taken from [MDN's Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):

  - `copyWithin`
  - `fill`
  - `push`
  - `pop`
  - `reverse`
  - `shift`
  - `sort`
  - `splice`
  - `unshift`

This rule may very easily cause false positives, however it's likely that whatever method does expose these methods will involve a mutation of that target object.
