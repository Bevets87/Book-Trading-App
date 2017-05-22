import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { deleteBook, getBooks, setBooksErrors } from '../actions/bookActions'
import { createTradeRequest, getTradeRequests, setTradeRequestsErrors } from '../actions/tradeRequestActions'

import Navbar from './Navbar'

import './AllBooks.scss'

class AllBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tradeRequestModal: false,
      requestedBook: null,
      myBooks: null,
      bookToTrade: null
    }
    this.handleTradeRequestModal = this.handleTradeRequestModal.bind(this)
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
    this.handleRequestTrade = this.handleRequestTrade.bind(this)
    this.handleSelectBookToTrade = this.handleSelectBookToTrade.bind(this)
  }
  componentDidMount () {
    let myBooks = this.props.books.filter(book => book.owner.email == this.props.user.email)
    this.setState({
      myBooks: myBooks
    })
  }
  handleTradeRequestModal (event) {
    event.preventDefault()
    let requestedBook = this.props.books.filter(book => book._id == event.target.value)
    this.setState({
      tradeRequestModal: this.state.tradeRequestModal ? false : true,
      requestedBook: requestedBook[0]
    })
  }
  handleRemoveBook (event) {
    event.preventDefault()
    let bookID = event.target.value
    deleteBook({bookID: bookID})
    .then(
      () => {
        this.props.dispatch(getBooks())
      })
    .catch(
      error => {
        this.props.dispatch(setBooksErrors(error.response.data.errors))
      })
  }
  handleRequestTrade (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    const { requestedBook, bookToTrade } = this.state
    createTradeRequest({token: token, to: requestedBook.owner._id, from: bookToTrade.owner._id, getBookID: requestedBook._id, giveBookID: bookToTrade._id})
    .then(
      () => {
        this.props.dispatch(getTradeRequests())
        this.setState({
          tradeRequestModal: this.state.tradeRequestModal ? false : true
        })
      })
    .catch(
      error => {
        this.props.dispatch(setTradeRequestsErrors(error.response.data.errors))
      }
    )
  }
  handleSelectBookToTrade (event) {
    event.preventDefault()
    let bookToTrade = this.props.books.filter(book => book._id == event.target.value)
    this.setState({
      bookToTrade: bookToTrade[0]
    })
  }
  render () {
    const { isAuthenticated, books, user } = this.props

    if (isAuthenticated) {
      return (
        <div>
          <Navbar />
          <div className='container-fluid all-books-container'>
            <h1><span className='glyphicon glyphicon-book'></span>AllBooks</h1>
            <div className='row all-books'>
              {books.filter(book => book.owner.email !== user.email ).map(book => {
                return (
                  <div key={book._id} className='col-md-3 col-sm-4'>
                    <div className='col-md-12 col-sm-12 book'>
                      <h4 className='title'>{book.title}</h4>
                      <h6 className='owner'>Owner: {book.owner.email}</h6>
                      <img src={book.cover} />
                      {book.owner.email !== user.email && <button value={book._id} onClick={this.handleTradeRequestModal} className='btn btn-primary'>Request Trade</button>}
                      {book.owner.email === user.email && <button value={book._id} onClick={this.handleRemoveBook} className='btn btn-danger'>Remove Book</button>}
                    </div>
                  </div>
                )
              })}
            </div>
            {this.state.tradeRequestModal && <div className='trade-request-modal-container'>
                                              <div className='trade-request'>
                                                <h1>Create Trade Request</h1>
                                                <h3>{this.state.requestedBook.title}</h3>
                                                <h4>Owner: {this.state.requestedBook.owner.email}</h4>
                                                <img src={this.state.requestedBook.cover} />
                                                <div className='form-group my-books'>
                                                  <h2>Select a book to trade:</h2>
                                                  <select className='form-control' onClick={this.handleSelectBookToTrade}>
                                                    {this.state.myBooks.map(myBook => <option key={myBook._id} value={myBook._id}>{myBook.title}</option>)}
                                                  </select>
                                                </div>
                                                <div className='button-container'>
                                                  <button onClick={this.handleRequestTrade} className='btn btn-primary'>Submit Trade</button>
                                                  <button onClick={this.handleTradeRequestModal} className='btn btn-danger'>Decline Trade</button>
                                                </div>
                                              </div>
                                            </div>
          }
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

AllBooks.propTypes = {
  isAuthenticated: PropTypes.bool,
  books: PropTypes.array,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  const { isAuthenticated, user } = state.userReducer
  const { books } = state.bookReducer
  return {
    isAuthenticated,
    books,
    user
  }
}

export default connect(mapStateToProps)(AllBooks)
