const path = require('path')
const moduleConfig = require('./webpack-module.config')
const buildPage = require('tram-build-page')

const dehydratedIndex = buildPage({
  appPath: './main.js',
  route: '/no-js',
  indexPath: './public/index.html'
})

module.exports = {
  entry: './main.js',
  devServer: {
    before: app => {
      app.get('/', (req, res) => {
        res.send(dehydratedIndex)
      })
      app.get('/index.html', (req, res) => {
        res.send(dehydratedIndex)
      })
    },
    after: app => {
      app.get('*', (req, res) => {
        res.send(dehydratedIndex)
      })
    },
    contentBase: './public',
    hot: true,
    inline: true,
    host: '0.0.0.0'
  },
  mode: process.env.NODE_ENV,
  module: moduleConfig(process.env.NODE_ENV),
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
