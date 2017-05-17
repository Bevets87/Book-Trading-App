import mongoose from 'mongoose'
const Schema = mongoose.Schema

const tradeSchema = new Schema({
  requests: [
    {
      receiver: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'book'
        }
      },
      sender: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'book'
        }
      }
    }
  ],
  agreements: [
    {
      receiver: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'book'
        }
      },
      sender: {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'book'
        }
      }
    }
  ]
})

const Trade = mongoose.model('trade', tradeSchema)

export default Trade
