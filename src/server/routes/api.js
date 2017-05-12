import express from 'express'

import { handle_get_google_book } from '../controllers/googleBookApiController'

let router = express.Router()

router.post('/', handle_get_google_book)


export default router
