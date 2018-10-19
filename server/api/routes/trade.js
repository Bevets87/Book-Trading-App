const express = require('express')
const tradeController = require('../controllers/trade')
const validateMiddleware = require('../../middleware/validate')
const { tradeSchema, tradeStatusSchema } = require('../../validation/schemas')

const router = express.Router()

router.param('id', tradeController.getById)

router.route('/')
.post(validateMiddleware(tradeSchema), tradeController.createOne)

router.route('/incoming')
.get(tradeController.getIncomingTrades)

router.route('/outgoing')
.get(tradeController.getOutgoingTrades)

router.route('/:id')
.put(validateMiddleware(tradeStatusSchema), tradeController.updateTradeStatus)
.delete(tradeController.removeOne)

module.exports = router
