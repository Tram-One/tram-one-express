const path = require('path')

module.exports = {
  entry: './main.js',
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    publicPath: './public',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports.serve = require('tram-dev-server-config')
