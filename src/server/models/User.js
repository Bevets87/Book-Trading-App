import mongoose from 'mongoose'
const Schema = mongoose.Schema

const tradeRequest = new Schema({
  to: String,
  from: String,
  getBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  giveBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  }
})

const tradeResponse = new Schema({
  to: String,
  from: String,
  getBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  giveBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  answer: Boolean
}


const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  fullName: String,
  tradeRequests: [ tradeRequest ],
  tradeResponses: [ tradeResponse ]
})

const User = mongoose.model('user', userSchema)

export default User
