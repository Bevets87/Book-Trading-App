import mongoose from 'mongoose'
const Schema = mongoose.Schema

const tradeRequestSchema = new Schema({
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  getBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  giveBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  }
})

const TradeRequest = mongoose.model('trade_request', tradeRequestSchema)

export default TradeRequest
