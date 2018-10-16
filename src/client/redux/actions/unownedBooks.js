import query from '../createQuery'

export const types = {
  RESPONSE: 'books_unowned_response',
  ERROR: 'books_unowned_error',
  CLEAR_ERROR: 'books_unowned_clear_error',
  CLEAR_RESPONSE: 'books_unowned_clear_response',
  LOADING: 'books_unowned_loading',
  UPDATE_TO_TRADEABLE: 'books_unowned_update_to_tradeable',
  UPDATE_TO_NOT_TRADEABLE: 'books_unowned_update_to_not_tradeable'
}

export const creators = {
  response: (response) => ({
    type: types.RESPONSE,
    payload: response
  }),
  clearResponse: () => ({
    type: types.CLEAR_RESPONSE
  }),
  error: (error) => ({
    type: types.ERROR,
    payload: error
  }),
  clearError: () => ({
    type: types.CLEAR_ERROR
  }),
  loading: () => ({
    type: types.LOADING
  }),
  updateToTradeable: (trade) => ({
    type: types.UPDATE_TO_TRADEABLE,
    payload: trade
  }),
  updateToNotTradeable: (trade) => ({
    type: types.UPDATE_TO_NOT_TRADEABLE,
    payload: trade
  }),
}

export const async = {
  getAll: (skip = 0) => async (dispatch, getState, fetch) => {
    
    const state = getState().unownedBooks
    try {
      const response = await fetch.get(`/api/books${query(skip, state.limit)}`)
      setTimeout(() => { dispatch(creators.response([ ...response.data, skip ])) }, 300)
    } catch (error) {
      dispatch(creators.error(error.response.data))
    }
  }
}

export default {
  types,
  creators,
  async
}