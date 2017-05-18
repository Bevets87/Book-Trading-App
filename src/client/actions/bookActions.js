import axios from 'axios'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_BOOKS_ERRORS = 'SET_BOOKS_ERRORS'

export const setBooks = (books) => {
  return {type: SET_BOOKS, books: books}
}

export const setBooksErrors = (booksErrors) => {
  return {type: SET_BOOKS_ERRORS, booksErrors: booksErrors}
}

export const getBooks = () => {
  return function (dispatch) {
    return axios.get('/books')
      .then(
        response => {
          dispatch(setBooks(response.data.books))
        })
      .catch(
        error => {
          dispatch(setBooksErrors(error.response.data))
        })
  }
}



export const createBook = (book) => {
  return axios.post('/books', book)
}

export const deleteBook = (book) => {
  return axios.post('/books/delete', book)
}
