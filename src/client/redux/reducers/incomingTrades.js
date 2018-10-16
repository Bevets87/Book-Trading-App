import { types } from '../actions/incomingTrades'

const initialState = {
  response: null,
  isLoading: true,
  error: null,
  count: 0,
  limit: 5,
  skip: 0
}

export default (state = initialState, action) => {
  if (action.type === types.RESPONSE) {
    const [ response, count, skip ] = action.payload

    return { ...state, isLoading: false, response, count, skip }
  }
  if (action.type === types.CLEAR_RESPONSE) {
    delete state.response
    return { ...state, response: null }
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
  if (action.type === types.ADD) {
    const trade = action.payload
    const count = state.count++
    const trades = state.response ? state.response : [] 
    return { ...state, response: [...trades, trade ], count }
  }
  if (action.type === types.REMOVE) {
    const id = action.payload
    const count = state.count--
    const trades = state.response ? state.response : []
    return { ...state, response: trades.filter(trade => trade._id !== id), count }
  }
  return state
}