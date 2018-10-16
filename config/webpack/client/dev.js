const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

let __root = process.cwd()

const imgRules = {
  test: /\.(png|jpg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}

module.exports = {
  entry: [
    '@babel/polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(__root, 'src', 'client')
  ],
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      imgRules 
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}