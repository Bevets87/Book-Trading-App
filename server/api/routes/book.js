const express =  require('express')
const bookController = require('../controllers/book')
const validateMiddleware = require('../../middleware/validate')
const { bookSchema } = require('../../validation/schemas')

const router = express.Router()

router.param('id', bookController.getById)

router.route('/')
  .get(bookController.getAllUnowned)
  .post(validateMiddleware(bookSchema), bookController.createOne)

router.route('/me')
  .get(bookController.getAllOwned)

router.route('/:id')
  .delete(bookController.removeOne)

module.exports = router 
