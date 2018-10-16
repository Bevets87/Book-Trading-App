const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const imgRules = {
  test: /\.(jpg|png)$/,
  use: [ 'url-loader' ]
}

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      imgRules 
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}

