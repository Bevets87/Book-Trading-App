import { combineReducers } from 'redux'
import authReducer from './auth'
import goodreadsReducer from './goodreads'
import userReducer from './user'
import ownedBooksReducer from './ownedBooks'
import unownedBooksReducer from './unownedBooks'
import incomingTradesReducer from './incomingTrades'
import outgoingTradesReducer from './outgoingTrades'
import messageReducer from './message'
import { types } from '../actions'

export const appReducer = combineReducers({
  auth: authReducer,
  ownedBooks: ownedBooksReducer,
  unownedBooks: unownedBooksReducer,
  incomingTrades: incomingTradesReducer,
  outgoingTrades: outgoingTradesReducer,
  goodreads: goodreadsReducer,
  user: userReducer,
  messages: messageReducer    
})

export default (state, action) => {
  if (action.type === types.RESET_STORE) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}
