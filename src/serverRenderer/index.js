/*eslint-disable*/
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import template from './template'
import { Provider } from 'react-redux'

import App from '../client/App'
import createStore from './createStore'
import reducers from '../client/redux/reducers'


export default function serverRenderer({ clientStats }) {
  return async (req, res) => {
      
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
      const { js } = flushChunks(clientStats, { chunkNames })
      
      const htmlString = template({ markup, js, styleTags, store, helmet })
      
      res.send(htmlString)
  }
  
}