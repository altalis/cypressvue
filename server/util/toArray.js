const _ = require("lodash");
/**
 * Ensures argument is an array. If arg is not an array it wraps it in an array.
 *
 * @param {any} arg
 * @returns {any[]} Argument converted to an array
 */
function toArray(arg) {
  return _.isArray(arg) ? arg : _.compact([arg]);
}
exports.toArray = toArray;

/**
 * Similar to toArray, but if arg is a string, splits it
 *
 * @param {any} arg
 * @param {string | RegExp} [separator] defaults to RegExp of comma surrounded by spaces
 * @returns {any[]} Argument converted to an array
 */
function toArraySplit(arg, separator) {
  if (!separator) {
    separator = /\s*,\s*/;
  }
  if (arg && _.isString(arg)) {
    return arg.split(separator);
  } else {
    return toArray(arg);
  }
}
exports.toArraySplit = toArraySplit;
