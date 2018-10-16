import userActions from '../actions/user'

 const initialState = {
  response: null,
  error: null,
  isLoading: true
}

export default (state = initialState, action) => {
  if (action.type === userActions.types.RESPONSE) {
    
    return { ...state, isLoading: false, response: action.payload }
  }
  if (action.type === userActions.types.LOADING) {
 
    return { ...state, isLoading: true }
  }
  if (action.type === userActions.types.ERROR) {
  
    return { ...state, isLoading: false, error: action.payload }
  }
  if (action.type === userActions.types.UPDATE) {
    const updated = updated
    delete state.response 
    return { ...state, response: updated }
  }
  if (action.type === userActions.types.CLEAR_RESPONSE) {
    delete state.response 
    return { ...state, response: null }
  }
  if (action.type === userActions.types.CLEAR_ERROR) {
    delete state.error 
    return { ...state, error: null }
  }

  return state 
}