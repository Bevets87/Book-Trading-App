import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateBook, setBooksErrors, getBooks } from '../actions/bookActions'
import { deleteTradeRequest, getTradeRequests, setTradeRequestsErrors } from '../actions/tradeRequestActions'

import Navbar from './Navbar'

import './MyTrades.scss'

class MyTrades extends Component {
  constructor (props) {
    super(props)
    this.handleDeleteRequest = this.handleDeleteRequest.bind(this)
    this.handleAcceptRequest = this.handleAcceptRequest.bind(this)
  }
  handleDeleteRequest (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    let tradeID = event.target.id
    deleteTradeRequest({tradeID: tradeID, token: token})
    .then(
      () => {
        this.props.dispatch(getTradeRequests())
        this.props.dispatch(getBooks())
      })
    .catch(
      error => {
        this.props.dispatch(setTradeRequestsErrors(error.response.data.errors))
      })
  }
  handleAcceptRequest (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    let tradeID = event.target.id
    updateBook({token: token, tradeID: tradeID})
    .then(
      () => {
        this.props.dispatch(getTradeRequests())
        this.props.dispatch(getBooks())
      })
    .catch(
      error => {
        this.props.dispatch(setBooksErrors(error.response.data.errors))
      })
  }
  render () {
    const { isAuthenticated, myTradeRequests, friendsTradeRequests } = this.props
    if (isAuthenticated) {
      return (
        <div>
          <Navbar />
          <div className='container-fluid my-trades-container'>
            <h1><span className='glyphicon glyphicon-book'></span>MyTrades</h1>
            <div className='row'>
              <div className='col-sm-6'>
                <h2>My Requests</h2>
                <div className='col-sm-12 my-trade-requests-container'>
                  <div className='row'>
                    <div className='col-xs-12'>
                    {myTradeRequests.length > 0 && myTradeRequests.map(myTradeRequest => {
                      const { getBook, giveBook, to, tradeResponse } = myTradeRequest
                      if (!tradeResponse) {
                        return (
                          <div key={myTradeRequest._id} className='col-xs-12 trade-container'>
                            <p>You have sent a request to <b>{to.email}</b> for <i>{getBook.title}</i> in exchange for <i>{giveBook.title}</i>.</p>
                            <div className='buttons-container'>
                              <button id={myTradeRequest._id} onClick={this.handleDeleteRequest} className='btn btn-danger'>Remove Request</button>
                            </div>
                          </div>
                        )
                      } else if (tradeResponse) {
                        return (
                          <div key={myTradeRequest._id} className='col-xs-12 trade-container'>
                            <p>Your request to <b>{to.email}</b> for <i>{getBook.title}</i> in exchange for <i>{giveBook.title}</i> has been accepted.</p>
                            <div className='buttons-container'>
                              <button id={myTradeRequest._id} onClick={this.handleDeleteRequest} className='btn btn-primary'>OK</button>
                            </div>
                          </div>
                        )
                      }
                    })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <h2>Friends Requests</h2>
                <div className='col-sm-12 friends-trade-request-container '>
                {friendsTradeRequests.length > 0 && friendsTradeRequests.filter(friendsTradeRequest => friendsTradeRequest.tradeResponse !== true).map(friendsTradeRequest => {
                  const { getBook, giveBook, from } = friendsTradeRequest
                  return (
                    <div key={friendsTradeRequest._id} className='col-xs-12 trade-container'>
                      <p>A request has been made for <i>{getBook.title}</i> in exchange for <i>{giveBook.title}</i> from <b>{from.email}</b>.</p>
                      <div className='buttons-container'>
                        <button id={friendsTradeRequest._id} className='btn btn-primary' onClick={this.handleAcceptRequest}>Accept</button>
                        <button id={friendsTradeRequest._id} className='btn btn-danger' onClick={this.handleDeleteRequest}>Decline</button>
                      </div>
                    </div>
                  )
                })}
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
  myTradeRequests: PropTypes.array,
  friendsTradeRequests: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  const { isAuthenticated, user } = state.userReducer
  const { tradeRequests } = state.tradeRequestReducer
  const validTradeRequests = tradeRequests.filter(tradeRequest => {
    let { from, getBook, giveBook, to, tradeResponse } = tradeRequest
    if (getBook !== null && giveBook !== null) {
      if (!tradeResponse) {
        return from.email === giveBook.owner.email && to.email === getBook.owner.email
      } else {
        return from.email === getBook.owner.email && to.email === giveBook.owner.email
      }
    }
  })
  const myTradeRequests =  validTradeRequests.filter(tradeRequest => {
    let { from } = tradeRequest
    return from.email === user.email
  })
  const friendsTradeRequests = validTradeRequests.filter(tradeRequest => {
    let { to } = tradeRequest
    return to.email === user.email
  })
  return {
    isAuthenticated,
    myTradeRequests,
    friendsTradeRequests
  }
}

export default connect(mapStateToProps)(MyTrades)
