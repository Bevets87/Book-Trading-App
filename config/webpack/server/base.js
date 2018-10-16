const webpack = require('webpack')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

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
  target: 'node',
  entry: [
    '@babel/polyfill',
    path.join(__root, 'src', 'server')
  ],
  output: {
    path: path.join(__root, 'dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      jsRules
    ]
  },
  externals: [ webpackNodeExternals() ],
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
  ]
}

