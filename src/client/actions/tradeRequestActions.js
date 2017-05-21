import axios from 'axios'

export const SET_TRADE_REQUESTS = 'SET_TRADE_REQUESTS'
export const SET_TRADE_REQUESTS_ERRORS = 'SET_TRADE_REQUESTS_ERRORS'

export const setTradeRequests = (tradeRequests) => {
  return {type: SET_TRADE_REQUESTS, tradeRequests: tradeRequests}
}

export const setTradeRequestsErrors = (tradeRequestsErrors) => {
  return {type: SET_TRADE_REQUESTS_ERRORS, tradeRequestsErrors: tradeRequestsErrors}
}

export const getTradeRequests = () => {
  return function (dispatch) {
    return axios.get('/trades/requests')
      .then(
        response => {
          dispatch(setTradeRequests(response.data.tradeRequests))
        })
      .catch(
        error => {
          dispatch(setTradeRequestsErrors(error.response.data.errors))
        })
  }
}

export function createTradeRequest(tradeRequest) {
  return axios.post('/trades/requests', tradeRequest)
}

export function deleteTradeRequest(tradeRequest) {
  return axios.post('/trades/requests/delete', tradeRequest)
}
