import { SET_USER, SET_USER_ERRORS } from '../actions/userActions'

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: null,
  serverErrors: {}
}

const setUser = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      isAuthenticated: action.isAuthenticated,
      user: action.user,
      serverErrors: {}
    }
  )
}

const setUserErrors = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      serverErrors: action.serverErrors,
      user: null,
      isAuthenticated: false
    }
  )
}

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_USER:
    return setUser(state, action)
  case SET_USER_ERRORS:
    return setUserErrors(state, action)
  default:
    return state
  }
}

export default userReducer
