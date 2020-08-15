/**
 * @license MIT
 */
/**
 * @fileoverview
 * A test webpack config.
 */
const path = require('path');
const ignoreOptional = require('.');

const MODULE_DEFAULTS = {
  rules: [
    {
      type: 'javascript/auto',
      test: /\..?js$/,
      exclude: /node_modules/,
    },
  ],
};

const CJS_CONFIG = {
  context: path.resolve(__dirname),
  mode: 'production',
  resolve: {
    extensions: ['.js', '.cjs', '.mjs'],
  },
  target: 'async-node',
  module: {
    ...MODULE_DEFAULTS,
  },
  entry: {
    importRewrite: './lib/importRewrite.cjs',
    importSquared: './lib/importSquared.cjs',
  },
  output: {
    path: path.resolve('build/'),
    filename: '[name].cjs',
    libraryTarget: 'commonjs',
  },
  plugins: [
    ignoreOptional(),
  ],
};

module.exports = [
  CJS_CONFIG,
];
