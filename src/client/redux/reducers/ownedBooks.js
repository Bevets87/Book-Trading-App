import { types } from '../actions/ownedBooks'

const initialState = {
  response: null,
  error: null,
  isLoading: true,
  count: 0,
  limit: 10,
  skip: 0  
}

export default (state = initialState, action) => {
  if (action.type === types.RESPONSE) {
    const [ response, count, skip ] = action.payload
    return { ...state, isLoading: false, response, count, skip }
  }
  if (action.type === types.CLEAR_RESPONSE) {
    delete state.response
    return { ...state, response: null }
  }
  if (action.type === types.LOADING) {
    return { ...state, isLoading: true }
  }
  if (action.type === types.ERROR) {
    const error = action.payload
    return { ...state, isLoading: false, error }
  }
  if (action.type === types.CLEAR_ERROR) {
    delete state.error
    return { ...state, error: null }
  }
  if (action.type === types.REMOVE) {
    const id = action.payload
    const count = state.count--
    const books = state.response ? state.response : []
    return { ...state, response: books.filter(book => book._id !== id), count, isLoading: false }
  }
  if (action.type === types.ADD) {
    const book = action.payload 
    const books = state.response ? state.response : []
    let response 
    let count = state.count  
    if (books.length < 3) {
      response = [ ...books, book ]
      count = count++
    } else {
      response = [ ...books ]
      
    }
    return { ...state, response, count, isLoading: false }
  }
  if (action.type === types.UPDATE_TO_TRADEABLE) {
    const trade = action.payload
    const books = state.response ? state.response : []
    return {
      ...state, response: books.map(book => {
        if (trade.bookToGet._id === book._id || trade.bookToGive === book._id) {
          book.tradeable = true
        }
        return book
      })
    }
  }
  if (action.type === types.UPDATE_TO_NOT_TRADEABLE) {
    const trade = action.payload
    const books = state.response ? state.response : []
    return {
      ...state, response: books.map(book => {
        if (trade.bookToGet === book._id || trade.bookToGive === book._id) {
          book.tradeable = false
        }
        return book
      })
    }
  }
 
  return state
}