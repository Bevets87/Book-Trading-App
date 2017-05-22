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

export function updateUser(userData) {
  return axios.post('/user/update', userData)
}
