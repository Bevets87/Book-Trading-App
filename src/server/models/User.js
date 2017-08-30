import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true 
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
  fullName: String
})

const User = mongoose.model('user', userSchema)

export default User
