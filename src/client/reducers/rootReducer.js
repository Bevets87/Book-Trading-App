import { combineReducers } from 'redux'
import userReducer from './userReducer'
import googleBookApiReducer from './googleBookApiReducer'
import bookReducer from './bookReducer'


export default combineReducers({
  userReducer,
  googleBookApiReducer,
  bookReducer
})
