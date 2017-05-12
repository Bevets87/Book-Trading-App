import axios from 'axios'

export const SET_GOOGLE_BOOK = 'SET_GOOGLE_BOOK'
export const SET_GOOGLE_BOOK_SEARCH = 'SET_GOOGLE_BOOK_SEARCH'
export const SET_GOOGLE_BOOK_ERRORS = 'SET_GOOGLE_BOOK_ERRORS'

export function setGoogleBook(googleBook) {
  return {type: SET_GOOGLE_BOOK, googleBook: googleBook}
}

export function setGoogleBookSearch() {
  return {type: SET_GOOGLE_BOOK_SEARCH}
}

export function setGoogleBookErrors(googleBookErrors) {
  return {type: SET_GOOGLE_BOOK_ERRORS, googleBookErrors: googleBookErrors}
}

export const requestGoogleBook = (searchTerm) => {
  return function (dispatch) {
    dispatch(setGoogleBookSearch())
    return axios.post('/api', { searchTerm: searchTerm })
    .then(
      response => {
        dispatch(setGoogleBook(response.data.googleBook))
      })
    .catch(
      error => {
        dispatch(setGoogleBookErrors(error.response.data))
      })
  }
}
