import { SET_USER, SET_USER_ERRORS } from '../actions/userActions'

const DEFAULT_STATE = {
  isAuthenticated: false,
  user: null,
  city: null,
  state: null,
  serverErrors: {}
}

const setUser = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      isAuthenticated: action.isAuthenticated,
      user: action.user,
      city: action.city,
      state: action.state,
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
      city: null,
      state: null,
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
