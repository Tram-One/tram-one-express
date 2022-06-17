const rlite = require('rlite-router')

const onNonMatchingPath = () => ({ matches: false })
const returnParams = params => ({ matches: true, ...params })

module.exports = (getPath) => (pattern = '*') => rlite(onNonMatchingPath, { [pattern]: returnParams })(getPath())
