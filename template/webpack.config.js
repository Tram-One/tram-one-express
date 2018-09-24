const path = require('path')

module.exports = {
  entry: './main.js',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  mode: process.env.DEVELOPMENT ? 'development' : 'production',
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
