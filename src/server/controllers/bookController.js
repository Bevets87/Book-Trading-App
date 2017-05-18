import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config
import Book from '../models/Book'

export const handle_get_books = (req, res) => {
  Book.find()
  .populate('owner')
  .exec((err, books) => {
    if (err) return console.error(err)
    res.json({books: books})
  })
}

export const handle_create_book = (req, res) => {
  const { title, author, cover, owner } = req.body
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
}

export const handle_delete_book = (req, res) => {
  const { bookID } = req.body
  Book.findOneAndRemove({_id: bookID}, (err, book) => {
    if (err) return console.error(err)
    console.log(book)
    res.json({book: book})
  })
}
