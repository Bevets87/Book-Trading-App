const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tradeSchema = new Schema({
  to: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  from: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  bookToGive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  bookToGet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  } 
})



module.exports = mongoose.model('Trade', tradeSchema)


