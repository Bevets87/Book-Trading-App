import { SET_GOOGLE_BOOK, SET_GOOGLE_BOOK_SEARCH, SET_GOOGLE_BOOK_ERRORS } from '../actions/googleBookApiActions'

const DEFAULT_STATE = {
  googleBook: {},
  isFetching: false,
  googleBookErrors: null
}

const setGoogleBook = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      googleBook: action.googleBook,
      isFetching: false,
      googleBookErrors: null
    }
  )
}

const setGoogleBookSearch = (state) => {
  return Object.assign(
    {},
    state,
    {
      googleBook: {},
      isFetching: true,
      googleBookErrors: null
    }
  )
}

const setGoogleBookErrors = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      googleBook: {},
      isFetching: false,
      googleBookErrors: action.googleBookErrors
    }
  )
}

const googleBookApiReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_GOOGLE_BOOK_SEARCH:
    return setGoogleBookSearch(state, action)
  case SET_GOOGLE_BOOK:
    return setGoogleBook(state, action)
  case SET_GOOGLE_BOOK_ERRORS:(state, action)
    return setGoogleBookErrors(state, action)
  default:
    return state
  }
}

export default googleBookApiReducer
