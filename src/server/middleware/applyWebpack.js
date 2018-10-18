import express from 'express'
import logger from '../logger'
import catchAllErrorware from '../errorware/catchAll'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import clientConfig from '../../../config/webpack/client'
import rendererConfig from '../../../config/webpack/renderer'
import config from '../../../config/env'

export const runInDevelopment = (app) => {
  const compiler = webpack([clientConfig, rendererConfig])
  const clientCompiler = compiler.compilers[0]
  const devMiddleware = webpackDevMiddleware(compiler)
  
  app.use(devMiddleware)
  app.use(webpackHotMiddleware(clientCompiler))
  app.use(webpackHotServerMiddleware(compiler))
  app.use(catchAllErrorware)
  
  devMiddleware.waitUntilValid(() => {
    app.listen(config.port, () => { logger.info(`listening on port ${config.port}`)})
  })
}

export default (app) => {
  if (process.env.NODE_ENV === 'development') {
    runInDevelopment(app)
  } else {
    webpack([clientConfig, rendererConfig]).run((err, stats) => {
      const renderer = require('../../../dist/renderer.bundle.js').default
      const clientStats = stats.toJson().children[0]
      app.use(express.static(clientConfig.output.path))
      app.use(renderer({ clientStats }))
      app.use(catchAllErrorware)
      app.listen(config.port, () => { logger.info(`listening on port ${config.port}`) })
    })
  }
}



