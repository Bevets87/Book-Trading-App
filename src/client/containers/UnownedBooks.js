import React from 'react'
import { func, array, number, object } from 'prop-types'
import parseError from '../utils/parseError'
import indexActions from '../redux/actions'
import unownedBooksActions from '../redux/actions/unownedBooks'
import { compose } from 'redux'
import { connect } from 'react-redux'
import withFetch from '../hocs/withFetch'

import Container from '../styles/base/Container'
import UnownedBook from '../components/UnownedBook'
import PaginatedList from '../hocs/PaginatedList'
import TradeRequestPage from '../pages/TradeRequest'

import {
  PulsatingBook, 
  Centered,
} from '../styles/components/Loading'

import {
  Text,
  Button 
} from '../styles/components/Warning'

export const Loading = () => {
  return(
    <Container>
      <Centered>
        <PulsatingBook />
      </Centered>
    </Container>
  )
}

export const Failure = ({ error, reset }) => {
  return(
    <Container>
      <Centered>
        <Text>{parseError(error)}</Text>
        <Button onClick={reset}>Got It!</Button>,
      </Centered>
    </Container>
  )
}

Failure.propTypes = {
  error: object,
  reset: func 
}

class Success extends React.Component {
  state = { 
    TradeRequest: { mounted: false, bookToGet: null },
  }
  renderTradeRequest = () => {
    const { bookToGet } = this.state.TradeRequest 
    return <TradeRequestPage bookToGet={bookToGet} unmount={this.unmountTradeRequest} />  
  }
  mountTradeRequest = (bookToGet) => {
    
    if (bookToGet) {
      this.setState({ TradeRequest: { mounted: true, bookToGet  } })
    }
  }
  unmountTradeRequest = () => {
    this.setState({ TradeRequest: { mounted: false, bookToGet: null } })
  }
  render() {
    const { limit, response, fetch, skip, count } = this.props 
    return(
      <Container>
        <PaginatedList response={response} fetch={fetch}
          limit={limit} count={count} skip={skip}>
          {({ _id, tradeable, image, owner, title }) => {
            return(
              <UnownedBook onClick={this.mountTradeRequest} key={_id} _id={_id} title={title} tradeable={tradeable} image={image} owner={owner}/>
            )
          }}
        </PaginatedList>
        {this.state.TradeRequest.mounted ? this.renderTradeRequest() : null}
      </Container>
    )
  }
} 

Success.propTypes = {
  response: array,
  fetch: func,
  limit: number,
  count: number,
  skip: number 
}

const mapStateToProps = (state) => ({
  response: state.unownedBooks.response,
  error: state.unownedBooks.error,
  isLoading: state.unownedBooks.isLoading,
  count: state.unownedBooks.count,
  limit: state.unownedBooks.limit,
  skip: state.unownedBooks.skip
})

const mapDispatchToProps = (dispatch) => ({
  fetch: (skip) => dispatch(unownedBooksActions.async.getAll(skip)),
  reset: () => dispatch(indexActions.creators.resetStore())
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect, withFetch)({ Success, Loading, Failure })










