import { combineReducers } from 'redux'
import userReducer from './userReducer'
import apiBookReducer from './apiBookReducer'
import bookReducer from './bookReducer'


export default combineReducers({
  userReducer,
  apiBookReducer,
  bookReducer
})
