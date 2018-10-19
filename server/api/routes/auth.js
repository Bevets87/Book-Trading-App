const express = require('express')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const validateMiddleware = require('../../middleware/validate')
const { signInSchema, signUpSchema } = require('../../validation/schemas')

const router = express.Router()

router.route('/')
  .post(
    validateMiddleware(signUpSchema), 
    authController.isNewUsername, 
    userController.createOne
  )

router.route('/signin')
  .post(
    validateMiddleware(signInSchema), 
    authController.getByUsername, 
    authController.validatePassword, 
    authController.authenticate
  )

router.route('/signout')
  .get(authController.unauthenticate)

module.exports = router
