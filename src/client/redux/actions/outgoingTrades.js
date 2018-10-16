import unownedBooksActions from './unownedBooks'
import ownedBooksActions from './ownedBooks'
import query from '../createQuery'

export const types = {
  RESPONSE: 'trades_outgoing_response',
  ERROR: 'trades_outgoing_error',
  ADD: 'trades_outgoing_add',
  REMOVE: 'trades_outgoing_remove',
  LOADING: 'trades_outgoing_loading',
  CLEAR_ERROR: 'trades_outgoing_clear_error',
  CLEAR_RESPONSE: 'trades_outgoing_clear_response'
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
  add: (addition) => ({
    type: types.ADD,
    payload: addition
  }),
  remove: (id) => ({
    type: types.REMOVE,
    payload: id
  }),
  loading: () => ({
    type: types.LOADING
  }),
  clearError: () => ({
    type: types.CLEAR_ERROR
  }),
  clearResponse: () => ({
    type: types.CLEAR_RESPONSE
  })
}

export const async = {
  getAll: (skip = 0) => async (dispatch, getState, fetch) => {
    const state = getState().outgoingTrades
    dispatch(creators.loading())
    try {
      const response = await fetch.get(`/api/trades/outgoing${query(skip, state.limit)}`)
      setTimeout(() => { dispatch(creators.response([ ...response.data, skip ])) }, 300)
    } catch (error) {
      return dispatch(creators.error(error.response.data))
    }
  },
  requestTrade: (trade) => async (dispatch, getState, fetch) => {
    dispatch(unownedBooksActions.creators.updateToNotTradeable(trade))
    dispatch(ownedBooksActions.creators.updateToNotTradeable(trade))
    try {
      await fetch.post('/api/trades', trade)
    
    } catch (error) {
      dispatch(ownedBooksActions.creators.updateToTradeable(trade))
      dispatch(unownedBooksActions.creators.updateToTradeable(trade))
      
    }
  },
  removeTrade: (id) => async (dispatch, getState, fetch) => {
    dispatch(creators.remove(id))
    try {
      await fetch.delete(`/api/trades/${id}`)
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

