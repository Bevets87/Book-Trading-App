export const types = {
  RESPONSE: 'goodreads_response',
  ERROR: 'goodreads_error',
  LOADING: 'goodreads_loading',
  RESET: 'goodreads_reset',
  SEARCH_TERM: 'goodreads_search_term'
}

export const creators = {
  response: (response) => ({
    type: types.RESPONSE,
    payload: response
  }),
  error: (error) => ({
    type: types.ERROR,
    payload: error 
  }),
  loading: () => ({
    type: types.LOADING
  }),
  reset: () => ({
    type: types.RESET
  }),
  searchTerm: (searchTerm) => ({
    type: types.SEARCH_TERM,
    payload: searchTerm
  })
}

export const async = {
  getBooks: () => async (dispatch, getState, fetch) => {
    const state = getState().goodreads
    dispatch(creators.loading())
    try {
      const response = await fetch.post('/api/services/goodreads', { searchTerm: state.searchTerm })
      setTimeout(() => { dispatch(creators.response(response.data)) }, 300)
    } catch (error) {
      setTimeout(() => { dispatch(creators.error(error.response.data)) }, 300)
    }
  },
  claimBook: (book) => async (dispatch, getState, fetch) => {
    dispatch(creators.loading())
    try {
      await fetch.post('/api/books', book)
      setTimeout(() => {
        dispatch(creators.reset())
      }, 300)
    } catch (error) {
      dispatch(creators.error(error.response.data))
    }
  },
}

export default {
  types,
  creators,
  async 
}



