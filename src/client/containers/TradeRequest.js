import React from 'react'
import { func, array, object, number } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withFetch from '../hocs/withFetch'

import indexActions from '../redux/actions'
import ownedBooksActions from '../redux/actions/ownedBooks'
import outgoingTradesActions from '../redux/actions/outgoingTrades'

import TradeRequest from '../components/TradeRequest'
import Warning from '../components/Warning'
import { PulsatingExchange, Modal } from '../styles/components/Loading'

export const Loading = () => {
  return <Modal><PulsatingExchange /></Modal>
}

export const Failure = ({ error, reset }) => {
  return <Modal><Warning error={error} reset={reset} /></Modal>
}

Failure.propTypes = {
  error: object,
  reset: func
}

export const Success = ({ response, skip, limit, count, fetch, requestTrade, bookToGet, unmount }) => {
  return(
    <TradeRequest 
      ownedBooks={response} 
      bookToGet={bookToGet} 
      skip={skip} 
      limit={limit} 
      count={count} 
      fetch={fetch} 
      unmount={unmount}
      requestTrade={requestTrade} 
    />
  )
}

Success.propTypes = {
  response: array,
  skip: number,
  limit: number,
  count: number,
  fetch: func,
  unmount: func,
  requestTrade: func,
  bookToGet: object,
}

const mapStateToProps = (state) => ({
  response: state.ownedBooks.response,
  isLoading: state.ownedBooks.isLoading,
  count: state.ownedBooks.count,
  limit: state.ownedBooks.limit,
  skip: state.ownedBooks.skip,
  error: state.ownedBooks.error
})

const mapDispatchToProps = (dispatch) => ({
  fetch: (skip) => dispatch(ownedBooksActions.async.getAll(skip)),
  requestTrade: (trade) => dispatch(outgoingTradesActions.async.requestTrade(trade)),
  reset: () => dispatch(indexActions.creators.resetStore())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, withFetch)({ Success, Failure, Loading })








