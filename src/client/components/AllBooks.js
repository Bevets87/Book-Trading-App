import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateBook, deleteBook, getBooks } from '../actions/bookActions'

import Navbar from './Navbar'

import './AllBooks.scss'

class AllBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tradeRequestModal: false,
      requestedBook: null,
      myBooks: null,
      bookToTradeID: null
    }
    this.handleTradeRequestModal = this.handleTradeRequestModal.bind(this)
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
    this.handleSubmitTrade = this.handleSubmitTrade.bind(this)
    this.handleSelectBookToTrade = this.handleSelectBookToTrade.bind(this)
  }
  handleTradeRequestModal (event) {
    event.preventDefault()
    let book = this.props.books.filter(book => book._id === event.target.value)
    let myBooks = this.props.books.filter(book => book.ownerID.email == this.props.user)
    this.setState({
      tradeRequestModal: this.state.tradeRequestModal ? false : true,
      requestedBook: book[0],
      myBooks: myBooks
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
        console.log(error.response.data.errors)
      })
  }
  handleSubmitTrade (event) {
    event.preventDefault()
    if (this.state.bookToTradeID) {
      updateBook({requestedBookID: this.state.requestedBook._id, userID: this.props.userID, userBookForTradeID: this.state.bookToTradeID})
      .then(
        () => {
          this.props.dispatch(getBooks())
          this.setState({
            tradeRequestModal: false,
            requestedBook: null,
            myBooks: null,
            bookToTradeID: null
          })
        })
      .catch(
        error => {
          console.log(error)
        })
    }
  }
  handleSelectBookToTrade (event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
      bookToTradeID: event.target.value
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
              {books.map(book => {
                return (
                  <div key={book._id} className='col-sm-2'>
                    <div className='col-sm-12 book'>
                      <h4 className='title'>{book.title}</h4>
                      <h6 className='owner'>Owner: {book.ownerID.email}</h6>
                      <img src={book.cover} />
                      {book.ownerID.email !== user && <button value={book._id} onClick={this.handleTradeRequestModal} className='btn btn-primary'>Request Trade</button>}
                      {book.ownerID.email === user && <button value={book._id} onClick={this.handleRemoveBook} className='btn btn-danger'>Remove Book</button>}
                    </div>
                  </div>
                )
              })}
            </div>
            {this.state.tradeRequestModal && <div className='trade-request-modal-container'>
                                              <div className='trade-request'>
                                                <h1>Create Trade Request</h1>
                                                <h3>{this.state.requestedBook.title}</h3>
                                                <h4>Owner: {this.state.requestedBook.ownerID.email}</h4>
                                                <img src={this.state.requestedBook.cover} />
                                                <div className='form-group my-books'>
                                                  <h2>Select a book to trade:</h2>
                                                  <select className='form-control' onClick={this.handleSelectBookToTrade}>
                                                    {this.state.myBooks.map(myBook => <option key={myBook._id} value={myBook._id}>{myBook.title}</option>)}
                                                  </select>
                                                </div>
                                                <div className='button-container'>
                                                  <button onClick={this.handleSubmitTrade} className='btn btn-primary'>Submit Trade</button>
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
  user: PropTypes.string,
  dispatch: PropTypes.func,
  userID: PropTypes.string
}

const mapStateToProps = (state) => {
  const { isAuthenticated, user, userID } = state.userReducer
  const { books } = state.bookReducer
  return {
    isAuthenticated,
    books,
    user,
    userID
  }
}

export default connect(mapStateToProps)(AllBooks)
