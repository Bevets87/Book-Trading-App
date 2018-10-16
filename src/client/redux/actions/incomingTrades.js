import query from '../createQuery'

export const types = {
  RESPONSE: 'trades_incoming_response',
  ERROR: 'trades_incoming_error',
  ADD: 'trades_incoming_add',
  REMOVE: 'trades_incoming_remove',
  LOADING: 'trades_incoming_loading',
  CLEAR_ERROR: 'trades_incoming_clear_error',
  CLEAR_RESPONSE: 'trades_incoming_clear_response'
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
    const state = getState().incomingTrades
    try {
      const response = await fetch.get(`/api/trades/incoming${query(skip, state.limit)}`)
      setTimeout(() => { dispatch(creators.response([ ...response.data, skip ])) }, 300)
    } catch (error) {
      dispatch(creators.error(error.response.data))
    }
  },
  acceptTrade: (id) => async (dispatch, getState, fetch) => {
    dispatch(creators.remove(id))
    try {
      await fetch.put(`/api/trades/${id}`, { status: 'accepted' })
    } catch (error) {
      dispatch(creators.error(error.response.data))
    }
  },
  declineTrade: (id) => async (dispatch, getState, fetch) => {
    dispatch(creators.remove(id))
    try {
      await fetch.put(`/api/trades/${id}`, { status: 'declined' })
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