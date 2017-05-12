import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config
import Book from '../models/Book'

export const handle_get_books = (req, res) => {
  Book.find((err, books) => {
    if (err) return console.error(err)
    res.json({books: books})
  })
}

export const handle_create_book = (req, res) => {
  const { bookFromClient } = req.body
  const { title, cover, ownerID } = bookFromClient
  let book = new Book({
    title: title,
    cover: cover,
    ownerID: ownerID
  })
  book.save((err, book) => {
  if (err) return console.error(err)
    res.json({book: book})
  })
}


export const handle_update_book = (req, res) => {
  const { bookFromClient } = req.body
  const { _id, userID, userBookForTradeID } = bookFromClient
  Book.findOne({_id: _id}, (err, book) => {
    if (err) return console.error(err)
    let bookRequests = book.requests.slice()
    bookRequests.push({
      userID: userID,
      userBookForTradeID: userBookForTradeID
    })
    book.requests = bookRequests
    book.save((err, book) => {
      if (err) return console.error(err)
      res.json({book: book})
    })
  })
}

export const handle_delete_book = (req, res) => {
  const { bookFromClient } = req.body
  const { _id } = bookFromClient
  Book.findOneAndRemove({_id: _id}, (err, book) => {
    if (err) return console.error(err)
    res.json({book: book})
  })
}
