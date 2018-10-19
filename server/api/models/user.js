const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../../config/env')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
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
  st8: {
    type: String,
    required: true
  }
  
})

userSchema.pre('save', function (next) {
  this.hashPassword(this.password)
    .then(hash => {
      this.password = hash
      next()
    })
    .catch(error => next(error))
})

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.methods.hashPassword = function (textPassword) {
  return bcrypt.genSalt(10)
  .then((salt) => bcrypt.hash(textPassword, salt))
}

userSchema.methods.authToken = function () {
  return jwt.sign({ _id: this._id }, config.jwt.secret, { expiresIn: config.jwt.expiration })
}


userSchema.methods.toClient = function () {
  return {
    username: this.username,
    city: this.city,
    st8: this.st8
  }
}



module.exports = mongoose.model('User', userSchema)


