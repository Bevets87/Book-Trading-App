const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let __root = process.cwd()

const imgRules = {
  test: /\.(png|jpg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/images/',
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true, // webpack@1.x
        disable: true, // webpack@2.x and newer
      },
    }
  ]
}


module.exports = {
  entry: [
    '@babel/polyfill',
    path.join(__root, 'src', 'client')
  ],
  mode: 'production',
  devtool: 'none',
  module: {
    rules: [ imgRules ]
  },
  plugins: [
    new CompressionWebpackPlugin({
      algorithm: 'gzip'
    })
  ]

}
