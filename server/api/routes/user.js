const express = require('express')
const userController = require('../controllers/user')
const validateMiddleware = require('../../middleware/validate')
const { updateUserInfoSchema, changePasswordSchema } = require('../../validation/schemas')

const router = express.Router()

router.route('/me')
  .get(userController.getMe)
  .post(validateMiddleware(updateUserInfoSchema), userController.updateMe)

router.route('/me/change-password')
  .post(
    validateMiddleware(changePasswordSchema), 
    userController.changePassword
  )

module.exports = router