import mongoose from 'mongoose'
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  cover: String,
  ownerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  borrower: {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    originDate: { type: Date, default: Date.now }
  },
  requests: [
    {
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      userBookForTradeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
      },
      originDate: { type: Date, default: Date.now }
    }
  ]
})

const Book = mongoose.model('book', bookSchema)

export default Book
