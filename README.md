# Ignore optional dependencies
Prevent issues with `fsevents` and other breaking, platform-specific
`optionalDependencies` in `package.json` by including this plugin first:

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