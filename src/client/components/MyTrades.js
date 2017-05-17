import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Navbar from './Navbar'

import './MyTrades.scss'

class MyTrades extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { isAuthenticated } = this.props

    if (isAuthenticated) {
      return (
        <div>
          <Navbar />
          <div className='container-fluid my-trades-container'>
            <h1><span className='glyphicon glyphicon-book'></span>MyTrades</h1>
            <div className='row'>
              <div className='col-sm-4'>
                <h2>My Trade Requests</h2>
                <div className='col-sm-12 my-trade-requests-container'>

                </div>
              </div>
              <div className='col-sm-4'>
                <h2>Friends Trade Requests</h2>
                <div className='col-sm-12 friends-trade-requests-container'>

                </div>
              </div>
              <div className='col-sm-4'>
                <h2>Notifications</h2>
                <div className='col-sm-12 trade-notifications-container'>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='protected-page-container'>
          <h1>This is a protected page.</h1>
        </div>
      )
    }
  }
}

MyTrades.propTypes = {
  isAuthenticated: PropTypes.bool,
  myTradeRequests: PropTypes.array

}

const mapStateToProps = (state) => {
  const { isAuthenticated, user } = state.userReducer
  const { books } = state.bookReducer
  const allBooksWithTradeRequests = books.filter(book => {
    if (book.requests.length > 0) {
      return book
    }
  })
  console.log(allBooksWithTradeRequests)
  const myTradeRequests = allBooksWithTradeRequests.requests.filter(request => {
    if (request.userID.email === user) {
      return request
    }
  })

  console.log(myTradeRequests)
/*  const friendsTradeRequests = books.filter(book => {
    if (book.requests.length > 0 && book.ownerID.email === user) {

    }
  }) */

  return {
    isAuthenticated,
    myTradeRequests

  }
}

export default connect(mapStateToProps)(MyTrades)
