import axios from 'axios'

export const SET_USER = 'SET_USER'
export const SET_USER_ERRORS = 'SET_USER_ERRORS'

export function setUser(user, isAuthenticated ) {
  return {type: SET_USER, user: user, isAuthenticated: isAuthenticated}
}

export function setUserErrors(serverErrors) {
  return {type: SET_USER_ERRORS, serverErrors: serverErrors}
}

export function userRegistrationRequest(userData) {
  return axios.post('/register', userData)
}

export function userLoginRequest(userData) {
  return axios.post('/login', userData)
}

export function userTradeRequest(userData) {
  return axios.post('/trade-request', userData)
}

export function userTradeResponse(userData) {
  return axios.post('/trade-response', userData)
}
