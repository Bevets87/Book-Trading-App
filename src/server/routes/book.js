import express from 'express'

import { handle_get_books, handle_create_book, handle_delete_book } from '../controllers/bookController'

let router = express.Router()

router.get('/', handle_get_books)
router.post('/', handle_create_book)
router.post('/delete', handle_delete_book)

export default router
