const express = require('express')
const logger = require('../logger')
const catchAllErrorware = require('../errorware/catchAll')
const config = require('../../config/env')
const webpack = require('webpack')
const clientConfig = require('../../config/webpack/client')
const serverRendererConfig = require('../../config/webpack/serverRenderer')

const runInDevelopment = (app) => {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
  const compiler = webpack([clientConfig, serverRendererConfig])
  const clientCompiler = compiler.compilers[0]
  const devMiddleware = webpackDevMiddleware(compiler)
  
  app.use(devMiddleware)
  app.use(webpackHotMiddleware(clientCompiler))
  app.use(webpackHotServerMiddleware(compiler))
  app.use(catchAllErrorware)
  
  devMiddleware.waitUntilValid(() => {
    app.listen(config.port, () => { logger.info(`listening on port ${config.port}`) })
  })
}

module.exports = (app) => {
  
  if (process.env.NODE_ENV === 'development') {
    runInDevelopment(app)
  } else {
    const serverRenderer = require('../../dist/serverRenderer.bundle.js').default
    webpack([clientConfig, serverRendererConfig]).run((error, stats) => {
      const clientStats = stats.toJson().children[0]
      app.use(express.static(clientConfig.output.path))
      app.use(serverRenderer({ clientStats }))
      app.use(catchAllErrorware)
      app.listen(process.env.NODE_ENV, () => { logger.info(`listening on port ${process.env.NODE_ENV}`) })
    })
  }
}



