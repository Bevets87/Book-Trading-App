/*eslint-disable*/
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import { clearChunks, flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import template from './template'
import { Provider } from 'react-redux'

import App from '../client/App'
import createStore from './createStore'
import reducers from '../client/redux/reducers'


export default function serverRenderer({ clientStats }) {
  return async (req, res, next) => {
      clearChunks()
      
      const context = {}
      const styleSheet = new ServerStyleSheet()
      const store = await createStore(req, reducers)
    
      const markup = renderToString(
        styleSheet.collectStyles(
          <Provider store={store}>
            <StaticRouter location={req.path} context={context} >
              <App />
            </StaticRouter>
          </Provider>
        )
      )
      console.dir(markup)
      if (context.notFound) { 
        res.status(404) 
      } else if (context.redirect) {
        res.status(301)
      } else {
        res.status(200)
      }
  
      const styleTags = styleSheet.getStyleTags()
      const chunkNames = flushChunkNames()
      const helmet = Helmet.renderStatic()
      const { js, scripts } = flushChunks(clientStats, { chunkNames })
      console.dir(scripts)
      const htmlString = template({ markup, js, styleTags, store, helmet })
      
      res.send(htmlString)
  }
  
}