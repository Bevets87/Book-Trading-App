import React from 'react'
import { func, object, array, number } from 'prop-types'
import withAuth from '../hocs/withAuth'
import withFetch from '../hocs/withFetch'
import { connect } from 'react-redux'
import { compose } from 'redux'
import indexActions from '../redux/actions'
import incomingTradesActions from '../redux/actions/incomingTrades'

import { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import PaginatedList from '../hocs/PaginatedList'
import IncomingTrade from '../components/IncomingTrade'
import RedirectToLanding from '../components/RedirectToLanding'
import Warning from '../components/Warning'
import { PulsatingExchange, Container } from '../styles/components/Loading'


export const Loading = () => <Container><PulsatingExchange /></Container>

export const Failure = ({ error, reset }) => <Warning error={error} reset={reset} />
Failure.propTypes = {
  error: object,
  reset: func 
}

export const Success = ({ response, acceptTrade, declineTrade, fetch, count, limit, skip }) => {
  return(
    <PaginatedList 
      response={response} fetch={fetch} count={count} limit={limit} skip={skip}
    >
    {({ _id, createdAt, from, bookToGive, bookToGet }) => {
     return(
      <IncomingTrade 
        key={_id}
        _id={_id}
        createdAt={createdAt}
        from={from}
        bookToGive={bookToGive}
        bookToGet={bookToGet}
        acceptTrade={acceptTrade}
        declineTrade={declineTrade}
        />
      )
    }}
    </PaginatedList>
  )
}

Success.propTypes = {
  response: array,
  acceptTrade: func,
  declineTrade: func,
  fetch: func,
  count: number,
  limit: number,
  skip: number 
}

const mapStateToProps = (state) => ({
  response: state.incomingTrades.response,
  error: state.incomingTrades.error,
  isLoading: state.incomingTrades.isLoading,
  count: state.incomingTrades.count,
  limit: state.incomingTrades.limit,
  skip: state.incomingTrades.skip
})

const mapDispatchToProps = (dispatch) => ({
  fetch: (skip) => dispatch(incomingTradesActions.async.getAll(skip)),
  reset: () => dispatch(indexActions.creators.resetStore()),
  acceptTrade: (id) => dispatch(incomingTradesActions.async.acceptTrade(id)),
  declineTrade: (id) => dispatch(incomingTradesActions.async.declineTrade(id))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const ConnectedIncomingTrades = compose(withConnect, withFetch)({ Success, Loading, Failure })

class IncomingTradesContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>Incoming trades</title>
        <meta property="og:title" content="Incoming trades" />
      </Helmet>
    )
  }
  renderBody() {
    return(
      <AccountHeader title={'Manage your incoming trades'}>
        <ConnectedIncomingTrades {...this.props} />
      </AccountHeader>
    )
  }
  render() {
    return(
      <div>
        {this.renderHead()}
        {this.renderBody()}
      </div>
    )
  }
}


export default withAuth({
  Auth: IncomingTradesContainer,
  Unauth: RedirectToLanding
})

