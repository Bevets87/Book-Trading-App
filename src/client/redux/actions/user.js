export const types = {
  RESPONSE: 'user_response',
  ERROR: 'user_error',
  UPDATE: 'user_update',
  LOADING: 'user_loading',
  CLEAR_ERROR: 'user_clear_error',
  CLEAR_RESPONSE: 'user_clear_response'
}

export const creators = {
  response: (response) => ({ type: types.RESPONSE, payload: response }),
  error: (error) => ({ type: types.ERROR, payload: error }),
  clearError: () => ({ type: types.CLEAR_ERROR }),
  clearResponse: () => ({ type: types.CLEAR_RESPONSE }),
  update: (update) => ({ type: types.UPDATE, payload: update }),
  loading: () => ({ type: types.LOADING })
}

export const async = {
  getMe: () => async (dispatch, getState, fetch) => {
    dispatch(creators.loading())
    try { 
      const response = await fetch.get('/api/users/me')
      setTimeout(() => { dispatch(creators.response(response.data)) }, 300)
    } catch (error) {
      dispatch(creators.error(error.response.data))
    }
  },
  updateMe: (updatedInfo) => async (dispatch, getState, fetch) => {
    dispatch(creators.loading())
    try {
      const response = await fetch.post('/api/users/me', updatedInfo)
      setTimeout(() => { dispatch(creators.response(response.data)) }, 300)
    } catch (error) {
      return dispatch(creators.error(error.response.data))
    }
  }
}

export default {
  types,
  creators,
  async 
}

