import express from 'express'
import authController from '../controllers/auth'
import userController from '../controllers/user'
import validateMiddleware from '../../middleware/validate'
import { signInSchema, signUpSchema } from '../../validation/schemas'

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

export default router 
