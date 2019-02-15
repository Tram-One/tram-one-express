const HtmlWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const package = require('../package')
const buildApp = require('../app')

// html config for webpack
module.exports = () => [
  new HtmlWebpackPlugin({
    // Required
    inject: false,
    template: require('html-webpack-template'),

    // Optional
    appMountId: 'app',

    // build root route now for the index.html
    // this will be available on initial load before the bundle loads, and when JS is disabled
    appMountHtmlSnippet: buildApp().toString('/'),

    headHtmlSnippet: fs.readFileSync('./public/head.html'),
    bodyHtmlSnippet: '',
    title: package.name
  })
]
