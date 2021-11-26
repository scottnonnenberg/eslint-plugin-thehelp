# Rule: `thehelp/absolute-or-current-dir`

This rule is designed to prevent this confusing and error-prone pattern:

```javascript
var app = require('../../../lib/app'); // invalid
import app from '../../../lib/app'; // invalid
```

Instead pushing you to just two options:

```javascript
var app = require('lib/app');
var peer = require('./peer');

import app from 'lib/app';
import peer from './peer';
```

Either dependencies come from the same directory or an absolute path is required. You can still require node modules like usual. But you can't require something from a child directory:

```javascript
var child = require('./sub/child'); // invalid
import child from './sub/child'; // invalid
```

For both of these situations you'd be required to use an absolute path.

## Absolute paths?

If you aren't using absolute paths today, this might seem impossible. How do you get this to work in Node.js, for example? First, let's talk about the browser. [Webpack makes it very easy to set up additional search paths](http://webpack.github.io/docs/resolving.html). In your `webpack.config.js`:

```javascript
{
  resolve: {
    // enable absolute path references at the root of the project
    root: __dirname,
  },
}
```

On the server side, it's a little more involved. Before doing any dependency loads from absolute paths, you'll need to add a dependency lookup path with the [`app-module-path`](https://github.com/patrick-steele-idem/app-module-path-node) node module. Say you created `src/setup_module_path.js` in your project and you wanted to set up a lookup at the root of the project:

```javascript
import path from 'path';
import modulePath from 'app-module-path';

modulePath.addPath(path.join(__dirname, '..'));
```

Now in other files in the project, just pull this in first:

```javascript
import '../src/setup_module_path';

import path from 'path';
import thing from 'src/modules/thing';

// ...
```

## Configuration

Now, how to set this up for your application? If you just turn this rule on, you'll get an error on that first line, pulling in `../src/setup_module_path`. But you can't do anything, because absolute paths aren't set up yet! Fear not, `exceptions` to the rescue:

```javascript
{
  'thehelp/absolute-or-current-dir': ['error', {
    exceptions: [/setup_module_path/],
  }]
}
```

`exceptions` is an array of strings which will be compared (exactly or with `endsWith()`) against the target of the `require()` or `import`. If a match is found, no error is thrown.
