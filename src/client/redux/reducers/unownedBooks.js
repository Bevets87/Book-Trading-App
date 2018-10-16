import { types } from '../actions/unownedBooks'

const initialState = {
  response: null,
  error: null,
  isLoading: true,
  count: 0,
  limit: 30,
  skip: 0  
}

export default (state = initialState, action) => {
  if (action.type === types.RESPONSE) {
    const [ response, count, skip ] = action.payload
 
    return { ...state, isLoading: false, response, count, skip }
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
  if (action.type === types.CLEAR_RESPONSE) {
    delete state.response
    return { ...state, response: null }
  }
  if (action.type === types.UPDATE_TO_TRADEABLE) {
    const trade = action.payload
    const books = state.response ? state.response : [] 
    return { ...state, response: books.map(book => {
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
