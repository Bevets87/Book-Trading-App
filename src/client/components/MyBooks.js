import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { requestApiBook, setApiBook } from '../actions/apiBookActions'
import { createBook, deleteBook, getBooks, setBooksErrors } from '../actions/bookActions'

import Navbar from './Navbar'

import './MyBooks.scss'

class MyBooks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
    this.handleAddBook = this.handleAddBook.bind(this)
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
    this.handleRemoveApiBook = this.handleRemoveApiBook.bind(this)
  }
  handleSearch (event) {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
  }
  handleSubmitSearch (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    this.props.dispatch(requestApiBook({token: token, searchTerm: this.state.searchTerm}))
  }
  handleAddBook (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    let book = this.props.apiBook
    book.owner = this.props.user._id
    createBook({title: book.title, author: book.author, cover: book.cover, owner: book.owner, token: token})
    .then(
      () => {
        this.props.dispatch(getBooks())
        this.props.dispatch(setApiBook(null))
        this.setState({
          searchTerm: ''
        })
      })
    .catch(
      error => {
        this.props.dispatch(setBooksErrors(error.response.data.errors))
      })
  }
  handleRemoveBook (event) {
    event.preventDefault()
    let token = localStorage.getItem('token')
    let bookID = event.target.value
    deleteBook({bookID: bookID, token: token})
    .then(
      () => {
        this.props.dispatch(getBooks())
      })
    .catch(
      error => {
        this.props.dispatch(setBooksErrors(error.response.data.errors))
      })
  }
  handleRemoveApiBook (event) {
    event.preventDefault()
    this.props.dispatch(setApiBook(null))
    this.setState({
      searchTerm: ''
    })
  }
  render () {
    const { isAuthenticated, apiBook, books } = this.props

    if (isAuthenticated) {
      return (
        <div>
          <Navbar />
          <div className='container-fluid my-books-container'>
            <h1><span className='glyphicon glyphicon-book'></span>MyBooks</h1>
            <div className='row my-books'>
              {books.map(book => {
                return (
                  <div  key={book._id} className='col-md-3 col-sm-4'>
                    <div className='col-md-12 col-sm-12 my-book'>
                      <h4 className='title'>{book.title}</h4>
                      <img src={book.cover} />
                      <button value={book._id} onClick={this.handleRemoveBook} className='btn btn-danger'>Remove Book</button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='search-container'>
              <input type='text' placeholder='Search for a book' value={this.state.searchTerm} onChange={this.handleSearch} />
              <button className='btn btn-primary' onClick={this.handleSubmitSearch} value={this.state.searchTerm}>Search</button>
              {apiBook && <div className='api-book-container'>
                            <div className='api-book'>
                              <h1 className='title'>{apiBook.title}</h1>
                              <h3 className='author'>by: {apiBook.author}</h3>
                              <img src={apiBook.cover}/>
                              <div className='button-container'>
                                <button onClick={this.handleAddBook} className='btn btn-primary'>Add to collection</button>
                                <button onClick={this.handleRemoveApiBook} className='btn btn-danger'>Not what I was looking for...</button>
                              </div>
                            </div>
                          </div>}
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

MyBooks.propTypes = {
  dispatch: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  apiBook: PropTypes.object,
  user: PropTypes.object,
  books: PropTypes.array
}

const mapStateToProps = (state) => {
  const { isAuthenticated, user } = state.userReducer
  const { apiBook } = state.apiBookReducer
  const { books } = state.bookReducer
  const myBooks = books.filter( book => book.owner._id === user._id)

  return {
    isAuthenticated,
    user,
    apiBook,
    books: myBooks
  }
}

export default connect(mapStateToProps)(MyBooks)