const Tram = require('tram-one')

const buildApp = () =>
  new Tram()
    .addRoute('/', require('./pages/home'))
    .addRoute('/404', require('./pages/404'))
    .addActions({ color: require('./actions/color') })

module.exports = buildApp
