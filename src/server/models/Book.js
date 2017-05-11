import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  cover: String,
  owner: String
})

const Book = mongoose.model('book', bookSchema)

export default Book
