const imgRules = {
  test: /\.(png|jpg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
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
  devtool: 'none',
  mode: 'production',
  module: {
    rules: [
      imgRules 
    ]
  }
}