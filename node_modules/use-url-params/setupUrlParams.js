const urlParamHook = require('./urlParamHook')

/**
 * @see https://tram-one.io/api/#Tram-One#useUrlParams
 * @name useUrlParams
 *
 * @param {function} [getPath] - function to return the current path, defaults to reading window.location.href
 * @returns the useUrlParams hook
 */
module.exports = urlParamHook
