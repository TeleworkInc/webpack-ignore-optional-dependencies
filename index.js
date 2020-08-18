/**
 * @license MIT
 */
/**
 * @fileoverview
 * A plugin which replaces any optional dependencies in a module's package.json.
 */

const webpack = require('webpack');
const noop = require('noop-webpack-plugin');

/**
 * Generate a regex matcher for the source replacement.
 *
 * @param {...string} packages
 * The list of packages to generate a regex match for.
 *
 * @return {RegExp} matcher
 */
const getDependencyRegex = (...packages) => {
  return new RegExp(packages.join('|'));
};

/**
 * Generate the actual plugin to provide Webpack.
 *
 * @param {...string} packages
 * The packages to disable.
 *
 * @return {webpack.NormalModuleReplacementPlugin}
 * The generated Module Replacement Plugin.
 */
const disablePackages = (...packages) => {
  if (!packages.length) {
    return noop();
  }

  return new webpack.NormalModuleReplacementPlugin(
      getDependencyRegex(...packages),
      'empty',
  );
};

module.exports = disablePackages;
