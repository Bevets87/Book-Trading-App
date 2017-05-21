import axios from 'axios'

export const SET_API_BOOK = 'SET_API_BOOK'
export const SET_API_BOOK_SEARCH = 'SET_API_BOOK_SEARCH'
export const SET_API_BOOK_ERRORS = 'SET_API_BOOK_ERRORS'

export function setApiBook(apiBook) {
  return {type: SET_API_BOOK, apiBook: apiBook}
}

export function setApiBookSearch() {
  return {type: SET_API_BOOK_SEARCH}
}

export function setApiBookErrors(apiBookErrors) {
  return {type: SET_API_BOOK_ERRORS, apiBookErrors: apiBookErrors}
}

export const requestApiBook = (userData) => {
  return function (dispatch) {
    dispatch(setApiBookSearch())
    return axios.post('/api', userData)
    .then(
      response => {
        dispatch(setApiBook(response.data.apiBook))
      })
    .catch(
      error => {
        dispatch(setApiBookErrors(error.response.data.errors))
      })
  }
}
