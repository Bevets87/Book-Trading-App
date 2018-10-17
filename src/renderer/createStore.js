import axios from 'axios'
import config from '../../config/env'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import getAuth from './getAuth'
import getData from './getData'

export default async (req, reducers) => {
  const fetch = axios.create({
    baseURL: `${config.host}:${config.port}`,
    headers: { cookie: req.get('cookie') || '' }
  })
  
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(fetch)))
  
  await getAuth(store)
  await getData(req, store)
  
  return store 
}
