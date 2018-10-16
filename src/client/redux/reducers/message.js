import { types } from '../actions/message'

const initialState = {
  response: null,
  error: null,
  isLoading: false
}

export default (state = initialState, action) => {
  if (action.type === types.RESPONSE) {
    
    return { ...state, isLoading: false, response: action.payload }
  }
  if (action.type === types.LOADING) {

    return { ...state, isLoading: true }
  }
  if (action.type === types.ERROR) {

    return { ...state, isLoading: false, error: action.payload }
  }
  if (action.type === types.CLEAR_RESPONSE) {
    delete state.response
    return { ...state, response: null }
  }
  if (action.type === types.CLEAR_ERROR) {
    delete state.error
    return { ...state, error: null }
  }

  return state
}