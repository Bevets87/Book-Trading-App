/* eslint-disable no-unused-vars */
import User from '../models/user'
import { next } from '../../middleware/async'
import config from '../../../../config/env'


export const validatePassword = (req, res) => new Promise((resolve, reject) => {
  req.user.comparePassword(req.body.password)
  .then((isValid) => isValid ? resolve({ message: 'Valid username or password' }) : reject({ message: 'Invalid username or password' }))
  .catch((error) => reject(error)) 
})

export const getByUsername = (req, res) => new Promise((resolve, reject) => {
  User.findOne({ username: req.body.username })
  .then((user) => {
    if (user) { req.user = user; resolve() } 
    else { return reject({ message: 'Invalid username or password' }) }
  })
  .catch((error) => reject({ ...error, message: 'Invalid username or password' }))
})

export const isNewUsername = (req, res) => new Promise((resolve, reject) => {
  User.findOne({ username: req.body.username })
  .then((user) => { return !user ? resolve({ message: 'User does not exist'}) : reject({ message: 'User exists' }) })
  .catch((error) => reject(error))
})

export const authenticate = (req, res) => {
  let token = req.user.authToken()
  res.status(200).cookie('token', token, { maxAge: config.jwt.expiration }).send({ message: 'Authenticated' }) 
}

export const unauthenticate = (req, res) => {
  const { token } = req.cookies
  if (token) { 
    res.clearCookie('token')
  }
  return res.status(200).send({ message: 'Unauthenticated' })
}


export default {
  validatePassword: next(validatePassword),
  getByUsername: next(getByUsername),
  isNewUsername: next(isNewUsername),
  authenticate,
  unauthenticate
}



