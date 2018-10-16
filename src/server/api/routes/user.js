import express from 'express'
import userController from '../controllers/user'
import validateMiddleware from '../../middleware/validate'
import { updateUserInfoSchema, changePasswordSchema } from '../../validation/schemas'

const router = express.Router()

router.route('/me')
  .get(userController.getMe)
  .post(validateMiddleware(updateUserInfoSchema), userController.updateMe)

router.route('/me/change-password')
  .post(
    validateMiddleware(changePasswordSchema), 
    userController.changePassword
  )

export default router 