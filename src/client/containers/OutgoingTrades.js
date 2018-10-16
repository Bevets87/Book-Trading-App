import React from 'react'
import { func, object, array, number } from 'prop-types'
import withAuth from '../hocs/withAuth'
import withFetch from '../hocs/withFetch'
import { connect } from 'react-redux'
import { compose } from 'redux'
import indexActions from '../redux/actions'
import outgoingTradesActions from '../redux/actions/outgoingTrades'

import { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import PaginatedList from '../hocs/PaginatedList'
import OutgoingTrade from '../components/OutgoingTrade'
import RedirectToLanding from '../components/RedirectToLanding'
import Warning from '../components/Warning'
import { PulsatingExchange, Container } from '../styles/components/Loading'

export const Loading = () => <Container><PulsatingExchange /></Container>

export const Failure = ({ error, reset }) => <Warning error={error} reset={reset} />
Failure.propTypes = {
  error: object,
  reset: func 
}


export const Success = ({ response, removeTrade, fetch, count, limit, skip }) => {

	return(
			<PaginatedList
				response={response} fetch={fetch} count={count} limit={limit} skip={skip}
			>
				{({ _id, createdAt, to, bookToGive, bookToGet, status }) => {
					return (
						<OutgoingTrade
							key={_id}
							_id={_id}
							createdAt={createdAt}
							to={to}
							bookToGive={bookToGive}
							bookToGet={bookToGet}
							status={status}
							removeTrade={removeTrade}
						/>
					)
				}}
			</PaginatedList>
		)
}

Success.propTypes = {
	response: array,
	removeTrade: func,
	fetch: func,
	count: number,
	limit: number,
	skip: number 
}

const mapStateToProps = (state) => ({
	response: state.outgoingTrades.response,
	error: state.outgoingTrades.error,
	isLoading: state.outgoingTrades.isLoading,
	count: state.outgoingTrades.count,
	limit: state.outgoingTrades.limit,
	skip: state.outgoingTrades.skip
})

const mapDispatchToProps = (dispatch) => ({
	fetch: (skip) => dispatch(outgoingTradesActions.async.getAll(skip)),
	reset: () => dispatch(indexActions.creators.resetStore()),
	removeTrade: (id) => dispatch(outgoingTradesActions.async.removeTrade(id))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const ConnectedOutgoingTrades = compose(withConnect, withFetch)({ Success, Loading, Failure })


class OutgoingTradesContainer extends React.Component {
	renderHead() {
		return(
			<Helmet>
        <title>Outgoing trades</title>
        <meta property="og:title" content="Outgoing trades" />
      </Helmet>
		)
	}
	renderBody() {
		return(
			<AccountHeader title={'Manage your outgoing trades'}>
				<ConnectedOutgoingTrades {...this.props} />
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
	Auth: OutgoingTradesContainer,
	Unauth: RedirectToLanding
}) 
