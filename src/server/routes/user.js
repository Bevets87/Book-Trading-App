import express from 'express'

import { handle_user_registration, handle_user_login, handle_user_update } from '../controllers/userController'

let router = express.Router()

router.post('/register', handle_user_registration)
router.post('/login', handle_user_login)
router.post('/user/update', handle_user_update)

export default router
