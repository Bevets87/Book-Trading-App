import express from 'express'
import userRouter from './user'
import tradeRouter from './trade'
import serviceRouter from './service'
import bookRouter from './book'

const router = express.Router()

router.use('/users', userRouter)
router.use('/trades', tradeRouter)
router.use('/services', serviceRouter)
router.use('/books', bookRouter)

export default router 