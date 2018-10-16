import express from 'express'
import goodreadsController from '../services/goodreads'
import validateMiddleware from '../../middleware/validate'
import { searchTermSchema } from '../../validation/schemas'


const router = express.Router()

router.post('/goodreads', validateMiddleware(searchTermSchema), goodreadsController.getBookBySearchTerm)

export default router 
