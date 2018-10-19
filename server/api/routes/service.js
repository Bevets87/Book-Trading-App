const express = require('express')
const goodreadsController = require('../services/goodreads')
const validateMiddleware = require('../../middleware/validate')
const { searchTermSchema } = require('../../validation/schemas')


const router = express.Router()

router.post('/goodreads', validateMiddleware(searchTermSchema), goodreadsController.getBookBySearchTerm)

module.exports = router
