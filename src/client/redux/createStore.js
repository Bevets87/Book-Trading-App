import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import axios from 'axios'

export default (initialState = {}) => {
  return createStore(reducers, initialState, applyMiddleware(thunk.withExtraArgument(axios)))
}