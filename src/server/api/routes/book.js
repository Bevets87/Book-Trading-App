import express from 'express'
import bookController from '../controllers/book'
import validateMiddleware from '../../middleware/validate'
import { bookSchema } from '../../validation/schemas'

const router = express.Router()

router.param('id', bookController.getById)

router.route('/')
  .get(bookController.getAllUnowned)
  .post(validateMiddleware(bookSchema), bookController.createOne)

router.route('/me')
  .get(bookController.getAllOwned)

router.route('/:id')
  .delete(bookController.removeOne)

export default router 
