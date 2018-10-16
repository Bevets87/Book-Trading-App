import authActions from '../actions/auth'

const initialState = {
  authenticated: false,
  error: null
 
}

export default (state = initialState, action) => {
  if (action.type === authActions.types.AUTH) {
    return { ...state, authenticated: true }
  }
  if (action.type === authActions.types.SET_ERROR) {
    return { ...state, error: action.payload }
  }
  if (action.type === authActions.types.CLEAR_ERROR) {
    delete state.error 
    return { ...state, error: null }
  } 
  if (action.type === authActions.types.UNAUTH) {
    return { ...state, authenticated: false }
  }
  return state 
}

