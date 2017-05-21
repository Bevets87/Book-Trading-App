import express from 'express'

import { handle_get_requests, handle_create_request, handle_delete_request } from '../controllers/tradeRequestController'

let router = express.Router()

router.get('/requests', handle_get_requests)
router.post('/requests', handle_create_request)
router.post('/requests/delete', handle_delete_request)


export default router
