import { SET_API_BOOK, SET_API_BOOK_SEARCH, SET_API_BOOK_ERRORS } from '../actions/apiBookActions'

const DEFAULT_STATE = {
  apiBook: null,
  isFetching: false,
  apiBookErrors: null
}

const setApiBook = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      apiBook: action.apiBook,
      isFetching: false,
      apiBookErrors: null
    }
  )
}

const setApiBookSearch = (state) => {
  return Object.assign(
    {},
    state,
    {
      apiBook: null,
      isFetching: true,
      apiBookErrors: null
    }
  )
}

const setApiBookErrors = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      apiBook: null,
      isFetching: false,
      apiBookErrors: action.apiBookErrors
    }
  )
}

const apiBookReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_API_BOOK_SEARCH:
    return setApiBookSearch(state, action)
  case SET_API_BOOK:
    return setApiBook(state, action)
  case SET_API_BOOK_ERRORS:(state, action)
    return setApiBookErrors(state, action)
  default:
    return state
  }
}

export default apiBookReducer
