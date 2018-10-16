import { types } from '../actions/goodreads'

const initialState = {
  response: null,
  isLoading: false,
  error: null,
  searchTerm: ''
}

export default (state = initialState, action) => {
  if (action.type === types.RESPONSE) {
    const response = action.payload
    return { ...state, isLoading: false, response }
  }
  if (action.type === types.SEARCH_TERM) {
    let searchTerm = action.payload 
    return { ...state, searchTerm }
  }
 
  if (action.type === types.LOADING) {
    
    return { ...state, isLoading: true }
  }
  if (action.type === types.ERROR) {
    const error = action.payload
   
    return { ...state, isLoading: false, error }
  }
  if (action.type === types.RESET) {
    delete state.response
    delete state.error
    delete state.searchTerm 
    return { ...initialState }
  }
  return state
}