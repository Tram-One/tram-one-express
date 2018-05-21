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

if (process.argv[1].split('/').includes('webpack-serve')) {
  module.exports.serve = require('tram-dev-server-config')
}
