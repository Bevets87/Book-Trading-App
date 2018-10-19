/* eslint-disable no-unused-vars */
const User = require('../models/user')
const bcrypt = require('bcrypt')
const { toClient } = require('../../middleware/async')
const config = require('../../../config/env')

const getMe = (req, res) => new Promise((resolve, reject) => {
  User.findById(req.decoded._id)
    .then((user) => { req.user = user; resolve(req.user.toClient()) })
    .catch((error) => { reject(error) })
})

const updateMe = (req, res) => new Promise((resolve, reject) => {
  const { city, st8, username } = req.body
  
  User.findByIdAndUpdate(req.decoded._id, { $set: { city, st8, username } }, { new: true })
  .then((user) => { resolve(user.toClient()) })
  .catch(() => { reject({ message: 'Invalid user' }) })
})

const removeMe = (req, res) => new Promise((resolve, reject) => {
  User.findByIdAndRemove(req.decoded._id)
    .then((user) => { resolve(user.toClient()) })
    .catch(() => { reject({ message: 'Invalid user' }) })
})

const createOne = (req, res) => new Promise((resolve, reject) => {
  const { username, password, city, st8 } = req.body
  const user = new User({ username, password, city, st8 })
  return user.save()
  .then((user) => {
    let token = user.authToken()
    res.cookie('token', token, { maxAge: config.jwt.expiration })
    return resolve(user.toClient())
  })
  .catch((error) => reject({ message: 'Unable to create user' }))
})

const changePassword = (req, res) => new Promise((resolve, reject) => {
  const { password, newPassword } = req.body
  var thisUser 

  User.findById(req.decoded._id)
  .then((user) => { thisUser = user; return user.comparePassword(password)})
  .then((isValid) => isValid ? Promise.resolve() : Promise.reject({ message: 'Invalid password'}))
  .then(() => { thisUser.password = newPassword; return thisUser.save()})
  .then((user) => { resolve(user.toClient()) })
  .catch(() => { reject({ message: 'Unable to change password' }) })
})

module.exports = {
  getMe: toClient(getMe),
  removeMe: toClient(removeMe),
  updateMe: toClient(updateMe),
  createOne: toClient(createOne),
  changePassword: toClient(changePassword)
}
