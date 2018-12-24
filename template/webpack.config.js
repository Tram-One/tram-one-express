const path = require('path')
const moduleConfig = require('./webpack-module.config')
const buildPage = require('tram-build-page')

module.exports = env => {
  // build default page (without javascript)
  const dehydratedIndex = buildPage({
    appPath: './main.js',
    route: '/',
    indexPath: './public/index.html',
    outPath: env === 'production' ? './dist/index.html' : undefined
  })

  return {
    entry: ['@babel/polyfill', './main.js'],
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
      host: '127.0.0.1',
      https: false,
      disableHostCheck: true
    },
    mode: env,
    module: moduleConfig(env),
    externals: {
      domino: 'domino'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
