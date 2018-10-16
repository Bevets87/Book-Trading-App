import express from 'express'
import tradeController from '../controllers/trade'
import validateMiddleware from '../../middleware/validate'
import { tradeSchema, tradeStatusSchema } from '../../validation/schemas'

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

export default router
