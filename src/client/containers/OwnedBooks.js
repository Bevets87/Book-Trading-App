import React from 'react'
import { object, func, array, number } from 'prop-types'
import withAuth from '../hocs/withAuth'
import withFetch from '../hocs/withFetch'
import { connect } from 'react-redux'
import indexActions from '../redux/actions'
import ownedBooksActions from '../redux/actions/ownedBooks'
import { compose } from 'redux'

import { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import OwnedBook from '../components/OwnedBook'
import PaginatedList from '../hocs/PaginatedList'
import RedirectToLanding from '../components/RedirectToLanding'
import Warning from '../components/Warning'
import { PulsatingBook, Container } from '../styles/components/Loading'

export const Loading = () => <Container><PulsatingBook /></Container>

export const Failure = ({ error, reset }) => <Warning error={error} reset={reset} />
Failure.propTypes = {
  error: object,
  reset: func 
}

export const Success = ({ response, limit, count, skip, unclaimBook, fetch }) => {
  return(
  
      <PaginatedList response={response} limit={limit} count={count} skip={skip} fetch={fetch} >
        {({ _id, image, tradeable }) => {
          return(
            <OwnedBook
              key={_id}
              _id={_id}
              image={image}
              tradeable={tradeable}
              onClick={unclaimBook}
            />
          )
        }}
      </PaginatedList>
    
  )
}

Success.propTypes = {
  response: array,
  limit: number,
  count: number,
  skip: number,
  unclaimBook: func, 
  fetch: func 
}

const mapStateToProps = (state) => ({
  response: state.ownedBooks.response,
  error: state.ownedBooks.error,
  isLoading: state.ownedBooks.isLoading,
  count: state.ownedBooks.count,
  limit: state.ownedBooks.limit,
  skip: state.ownedBooks.skip
})

const mapDispatchToProps = (dispatch) => ({
  fetch: (skip) => dispatch(ownedBooksActions.async.getAll(skip)),
  reset: () => dispatch(indexActions.creators.resetStore()),
  unclaimBook: (id) => dispatch(ownedBooksActions.async.unclaimBook(id))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const ConnectedOwnedBooks = compose(withConnect, withFetch)({ Success, Loading, Failure })

class OwnedBooksContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>My books</title>
        <meta property="og:title" content="My books" />
      </Helmet>
    )
  }
  renderBody() {
    return(
      <AccountHeader title={'Manage your books'}>
        <ConnectedOwnedBooks {...this.props} />
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
  Auth: OwnedBooksContainer,
  Unauth: RedirectToLanding
})


