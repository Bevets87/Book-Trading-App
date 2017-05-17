import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config
import Book from '../models/Book'

export const handle_get_books = (req, res) => {
  Book.find()
  .populate('ownerID')
  .populate('borrowerID')
  .populate('requests.userID')
  .populate('requests.userBookForTradeID')
  .exec((err, books) => {
    if (err) return console.error(err)
    res.json({books: books})
  })
}

export const handle_create_book = (req, res) => {
  const { title, author, cover, ownerID } = req.body
  let book = new Book({
    title: title,
    author: author,
    cover: cover,
    ownerID: ownerID
  })
  book.save((err, book) => {
  if (err) return console.error(err)
    console.log(book)
    res.json({book: book})
  })
}


export const handle_update_book = (req, res) => {
  const {requestedBookID, userID, userBookForTradeID  } = req.body
  Book.findOne({_id: requestedBookID}, (err, book) => {
    if (err) return console.error(err)
    if (book.requests.length > 0) {
      let bookRequests = book.requests.slice()
      bookRequests.push({
        userID: userID,
        userBookForTradeID: userBookForTradeID
      })
      book.requests = bookRequests
    } else {
      let bookRequests = []
      bookRequests.push({
        userID: userID,
        userBookForTradeID: userBookForTradeID
      })
      book.requests = bookRequests
    }
    book.save((err, book) => {
      if (err) return console.error(err)
      console.log(book)
      res.json({book: book})
    })
  })
}

export const handle_delete_book = (req, res) => {
  const { bookID } = req.body
  console.log(req.body)
  Book.findOneAndRemove({_id: bookID}, (err, book) => {
    if (err) return console.error(err)
    console.log(book)
    res.json({book: book})
  })
}
