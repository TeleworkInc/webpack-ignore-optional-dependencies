# Ignore optional dependencies
Prevent issues with `fsevents` and other breaking, platform-specific
`optionalDependencies` in `package.json` by including this plugin first in the
plugins stack.

Only points module sources to the `empty` module if it is found in
`package.json > optionalDependencies`.

`webpack.config.js`
```javascript
const ignoreOptional = require('webpack-ignore-optional');
{
  ...
  plugins: [
    ignoreOptional(),
    ...
  ],
}
```