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
  name: 'server',
  target: 'node',
  entry: [
    '@babel/polyfill',
    path.join(__root, 'src', 'serverRenderer')
  ],
  output: {
    path: path.join(__root, 'dist'),
    filename: 'serverRenderer.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    exprContextCritical: false,
    rules: [
      jsRules
    ]
  },
  externals: [ 
    webpackNodeExternals(
      { whitelist: [ /babel-plugin-universal-import|react-universal-component/, /webpack-flush-chunks/ ] }
    ) 
  ],
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
  
}

