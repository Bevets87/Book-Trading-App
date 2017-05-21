import { SET_TRADE_REQUESTS, SET_TRADE_REQUESTS_ERRORS } from '../actions/tradeRequestActions'

const DEFAULT_STATE = {
  tradeRequests: [],
  tradeRequestsErrors: null
}

const setTradeRequests = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      tradeRequests: action.tradeRequests,
      tradeRequestsErrors: null
    }
  )
}

const setTradeRequestsErrors = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      tradeRequests: [],
      tradeRequestsErrors: action.tradeRequestsErrors
    }
  )
}

const tradeRequestReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case SET_TRADE_REQUESTS:
    return setTradeRequests(state, action)
  case SET_TRADE_REQUESTS_ERRORS:
    return setTradeRequestsErrors(state, action)
  default:
    return state
  }
}

export default tradeRequestReducer
