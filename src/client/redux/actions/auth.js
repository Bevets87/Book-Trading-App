import rootActions from './index'

export const types = {
  AUTH: 'auth',
  SET_ERROR: 'set_auth_error',
  UNAUTH: 'unauth',
  CLEAR_ERROR: 'clear_auth_error',
}

export const creators = {
  auth: () => ({
    type: types.AUTH
  }),
  unauth: () => ({
    type: types.UNAUTH
  }),
  setError: (error) => ({
    type: types.SET_ERROR,
    payload: error 
  }),
  clearError: () => ({
    type: types.CLEAR_ERROR 
  })
}

export const async = {
  getMe: () => async (dispatch, getState, fetch) => {
    try { 
      await fetch.get('/api/users/me')
      return dispatch(creators.auth())
      
    } catch (error) {
      dispatch(creators.unauth())
      return dispatch(rootActions.creators.resetStore())
    }
  },
  signInUser: (data) => async (dispatch, getState, fetch) => {
    try {
      await fetch.post('/auth/signin', data)
      return dispatch(creators.auth())
     
   
    } catch(error) {
      return dispatch(creators.setError(error.response.data))
      
    }
  },
  signUpUser: (data) => async (dispatch, getState, fetch) => {
    try {
      await fetch.post('/auth', data)
      return dispatch(creators.auth())
      
     
    } catch (error) {
      return dispatch(creators.setError(error.response.data))
      
    }
    
  },
  signOutUser: () => async (dispatch, getState, fetch) => {
    try {
      await fetch.get('/auth/signout')
      dispatch(creators.unauth())
      return dispatch(rootActions.creators.resetStore())
    
    } catch (error) {
      dispatch(creators.unauth())
      return dispatch(rootActions.creators.resetStore())
    }
  }
}


export default {
 types,
 creators,
 async 
}