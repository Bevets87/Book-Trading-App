const path = require('path')
const webpack = require('webpack')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

let __root = process.cwd()

const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    }

  ]
}

module.exports = {
  name: 'client',
  target: 'web',
  output: {
    path: path.join(__root, 'dist', 'client'),
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },
  module: {
    exprContextCritical: false,
    rules: [
      jsRules 
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsWebpackPlugin()],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  plugins: [
    new webpack.DefinePlugin({ 
      proccess: { 
        env: { 
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)  
        } 
      }
    })
  ]
}


