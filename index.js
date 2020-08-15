/**
 * @license MIT
 */
/**
 * @fileoverview
 * A plugin which replaces any optional dependencies in a module's package.json.
 *
 * @external webpack
 */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const noop = require('noop-webpack-plugin');

/**
 * Generate a regex matcher for the source replacement.
 *
 * @param {...string} optionalDependencies
 * The list of optional dependencies to generate a regex match from.
 *
 * @return {RegExp} matcher
 */
const getDependencyRegex = (optionalDependencies = []) => {
  return new RegExp(optionalDependencies.join('|'));
};

/**
 * Generate the actual plugin to provide Webpack.
 *
 * @return {webpack.NormalModuleReplacementPlugin}
 * The generated Module Replacement Plugin.
 */
const ignoreOptionalDependencies = () => {
  const packageObj = JSON.parse(
      fs.readFileSync(
          path.resolve(process.cwd(), 'package.json'),
      ),
  );

  const optionalDependencies = Object.keys(
      packageObj.optionalDependencies || {},
  );

  if (!optionalDependencies.length) {
    return noop();
  }

  return new webpack.NormalModuleReplacementPlugin(
      getDependencyRegex(optionalDependencies),
      'empty',
  );
};

module.exports = ignoreOptionalDependencies;
