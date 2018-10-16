import React, { Component } from 'react'
import { func, array, object, oneOfType, bool  } from 'prop-types'

const withFetch = ({ Loading, Failure, Success }) => {
  class FetchContainer extends Component {
    componentDidMount() {
      this.props.fetch()
      
    }
    render() {
      const { fetch, response, error, isLoading, reset } = this.props
      if (isLoading) {
        return <Loading />
      } else if (error) {
        return <Failure error={error} reset={reset} />
      } else {
        return <Success response={response} fetch={fetch} {...this.props} />
      }
    }
  }

  FetchContainer.propTypes = {
    fetch: func,
    response: oneOfType([object, array]),
    error: object,
    isLoading: bool,
    reset: func  
  }

  return FetchContainer
}


export default withFetch