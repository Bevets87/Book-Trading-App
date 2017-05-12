import { SET_BOOKS, SET_BOOKS_ERRORS } from '../actions/bookActions'

const DEFAULT_STATE = {
  books: [],
  booksErrors: null
}

const setBooks = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      books: action.books,
      booksErrors: null
    }
  )
}

const setBooksErrors = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      books: [],
      booksErrors: action.booksErrors
    }
  )
}

const bookReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_BOOKS:
    return setBooks(state, action)
  case SET_BOOKS_ERRORS:
    return setBooksErrors(state, action)
  default:
    return state
  }
}

export default bookReducer
