import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config

import User from '../models/User'

import validateRegistrationInput from '../shared/validations/register'
import validateLoginInput from '../shared/validations/login'

const createToken = function(username) {
  return jwt.sign({user: username}, process.env.JWT_SECRET || JWT_SECRET, {expiresIn: 60 * 60})
}

export const handle_user_registration = function (req, res) {
  const { errors, isValid } = validateRegistrationInput (req.body)
  const { password, email, city, state } = req.body

  if (isValid){
    User.findOne({email: email}, (err, user) => {
      if(err) return console.error(err)
      if(!user) {
        const passwordDigest = bcrypt.hashSync(password, 10)
        user = new User({
          password: passwordDigest,
          email: email,
          city: city,
          state: state,
          fullName: ''
        })
        user.save((err, user) => {
          if(err) return console.error(err)
          console.log(user)
          res.status(201).json({
            email: user.email,
            _id: user._id,
            city: user.city,
            state: user.state,
            fullName: user.fullName,
            token: createToken(user.email)
          })
        })
      } else if(user) {
        res.status(401).json({errors: {registrationForm: 'The email supplied is already registered!'}})
      }
    })
  }else {
    res.status(400).json({errors})
  }
}

export const handle_user_login = function (req, res) {
  const { errors, isValid } = validateLoginInput (req.body)
  const { email, password } = req.body

  if(isValid){
    User.findOne({email: email}, (err, user) => {
      if(user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          email: user.email,
          _id: user._id,
          city: user.city,
          state: user.state,
          fullName: user.fullName,
          token: createToken(user.email)
        })
      } else {
        res.status(401).json({
          errors: {loginForm: 'Invalid Credentials!'}
        })
      }
    })
  }
  else {
    res.status(400).json({errors})
  }
}

export const handle_user_update = function (req, res) {
  const { userData } = req.body
  jwt.verify(userData.token, process.env.JWT_SECRET || JWT_SECRET, (err, decoded) => {
    if (!err) {
      User.findOne({_id: userData.userID}, (err, user) => {
        if (err) return console.error(err)
        user.city = userData.userCity
        user.state = userData.userState
        user.fullName = userData.userFullName
        user.save((err, user) => {
          if (err) return console.error(err)
          res.json({
            email: user.email,
            _id: user._id,
            city: user.city,
            state: user.state,
            fullName: user.fullName
          })
        })
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}
