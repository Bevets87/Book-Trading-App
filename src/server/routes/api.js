import express from 'express'

import { handle_get_api_book } from '../controllers/apiBookController'

let router = express.Router()

router.post('/', handle_get_api_book)


export default router
