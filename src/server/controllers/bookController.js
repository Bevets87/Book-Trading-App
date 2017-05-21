import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config
import Book from '../models/Book'
import TradeRequest from '../models/TradeRequest'

export const handle_get_books = (req, res) => {
  Book.find()
  .populate('owner')
  .exec((err, books) => {
    if (err) return console.error(err)
    res.json({books: books})
  })
}

export const handle_create_book = (req, res) => {
  const { title, author, cover, owner, token } = req.body
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      let book = new Book({
        title: title,
        author: author,
        cover: cover,
        owner: owner
      })
      book.save((err, book) => {
      if (err) return console.error(err)
        console.log(book)
        res.json({book: book})
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}

export const handle_delete_book = (req, res) => {
  const { bookID, token } = req.body
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      Book.findOneAndRemove({_id: bookID}, (err, book) => {
        if (err) return console.error(err)
        console.log(book)
        res.json({book: book})
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}

export const handle_update_book = (req, res) => {
  const { tradeID, token } = req.body
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      TradeRequest.findOne({_id: tradeID})
      .populate('getBook')
      .populate('giveBook')
      .populate('to')
      .populate('from')
      .exec((err, tradeRequest) => {
        if (err) return console.error(err)
        Book.findOne({_id: tradeRequest.getBook._id}, (err, getBook) => {
          if (err) return console.error(err)
          getBook.owner = tradeRequest.from._id
          getBook.save((err, getBook) => {
            if (err) return console.error(err)
            console.log(getBook)
          })
        })
        Book.findOne({_id: tradeRequest.giveBook._id}, (err, giveBook) => {
          if (err) return console.error(err)
          giveBook.owner = tradeRequest.to._id
          giveBook.save((err, giveBook) => {
            if (err) return console.error(err)
            res.json({book: giveBook})
          })
        })
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}
