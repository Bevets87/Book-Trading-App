import mongoose from 'mongoose'
const Schema = mongoose.Schema

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
  otherUserRequests: [
    {
      user: String,
      city: String,
      state: String,
      book: Object,
      createdAt: {
        type: Date,
        expires: '24h',
        default: Date.now
      }
    }
  ],
  myRequests: [
    {
      book: Object,
      createdAt: {
        type: Date,
        expires: '24h',
        default: Date.now
      }
    }
  ],
  myBooks: Array
})

const User = mongoose.model('user', userSchema)

export default User
