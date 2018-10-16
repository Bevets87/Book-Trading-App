const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}

