import { combineReducers } from 'redux'
import userReducer from './userReducer'
import apiBookReducer from './apiBookReducer'
import bookReducer from './bookReducer'
import tradeRequestReducer from './tradeRequestReducer'


export default combineReducers({
  userReducer,
  apiBookReducer,
  bookReducer,
  tradeRequestReducer
})
