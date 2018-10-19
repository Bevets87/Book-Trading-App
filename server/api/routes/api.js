const express = require('express')
const userRouter = require('./user')
const tradeRouter = require('./trade')
const serviceRouter = require('./service')
const bookRouter = require('./book')

const router = express.Router()

router.use('/users', userRouter)
router.use('/trades', tradeRouter)
router.use('/services', serviceRouter)
router.use('/books', bookRouter)

module.exports = router 