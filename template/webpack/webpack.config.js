const path = require('path')
const HtmlWebpackConfig = require('./webpack-html.config')
const moduleConfig = require('./webpack-module.config')

module.exports = env => {
  return {
    entry: ['@babel/polyfill', './index.js'],
    devServer: {
      contentBase: './public',
      hot: true,
      inline: true,
      host: '127.0.0.1',
      https: false,
      disableHostCheck: true,
      historyApiFallback: true
    },
    mode: env,
    module: moduleConfig(env),
    externals: {
      domino: 'domino'
    },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, '..', 'dist')
    },
    plugins: [
      ...HtmlWebpackConfig()
    ]
  }
}
