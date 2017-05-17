import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  author: String,
  cover: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Book = mongoose.model('book', bookSchema)

export default Book
