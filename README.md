# Disable packages
Disable a package throughout your build process by pointing it to an empty
module. This was designed for use with the `fsevents` package, which breaks
builds for Webpack and Rollup alike.

### Prerequisites
Mandatory `empty` peer-dep is required:
```bash
yarn add -D empty
```

`webpack.config.js`
```javascript
const disablePackages = require('webpack-disable-package');
{
  ...
  plugins: [
    disablePackages('fsevents', 'my-broken-dependency', ...),
    ...
  ],
}
```