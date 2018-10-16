export const types = {
  RESPONSE: 'message_response',
  ERROR: 'message_error',
  LOADING: 'message_loading',
  CLEAR_ERROR: 'message_clear_error',
  CLEAR_RESPONSE: 'message_clear_response'
}

export const creators = {
  response: (response) => ({ type: types.RESPONSE, payload: response }),
  error: (error) => ({ type: types.ERROR, payload: error }),
  clearError: () => ({ type: types.CLEAR_ERROR }),
  clearResponse: () => ({ type: types.CLEAR_RESPONSE }),
  loading: () => ({ type: types.LOADING })
}

export const async = {
  changePassword: (passwordInfo) => async (dispatch, getState, fetch) => {
    dispatch(creators.loading())
    try { 
      await fetch.post('/api/users/me/change-password', passwordInfo)
      setTimeout(() => { dispatch(creators.response({ message: 'Password updated!'})) }, 300)
    } catch (error) {
      setTimeout(() => { dispatch(creators.error(error.response.data)) }, 300)
    }
  }
}

export default {
  types,
  creators,
  async 
}

