import express from 'express'

import { handle_user_registration, handle_user_login, handle_user_trade_request, handle_user_trade_response } from '../controllers/userController'

let router = express.Router()

router.post('/register', handle_user_registration)
router.post('/login', handle_user_login)
router.post('trade-request', handle_user_trade_request)
router.post('trade-response', handle_user_trade_response)

export default router
