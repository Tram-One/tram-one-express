const urlParamHook = require('./urlParamHook')

const defaultGetPath = () => window.location.href.replace(window.location.origin, '')

/**
 * @see https://tram-one.io/api/#Tram-One#useUrlParams
 *
 * @description
 * Hook that returns path variables based on the route.
 * Can return path parameters, query params, and more.
 * It's internal functionality is powered by the package
 * {@link https://www.npmjs.com/package/rlite-router | rlite}
 *
 * Rather than using XML templates to define routes, this method enables
 * routing in javascript.
 *
 * @param {String} [pattern] path for resolving path parameters (not required for query params)
 *
 * @returns {Object} object with a `matches` key, and (if it matched) path and query parameters
 */
module.exports = urlParamHook(defaultGetPath)
