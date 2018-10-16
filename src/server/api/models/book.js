import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  author: {
    type: String,
    required: true 
  },
  image: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tradeable: {
    type: Boolean,
    default: true
  }
 
})

bookSchema.statics.handleUpdateTradeStatus = function(trade, status) {
  const { bookToGet, bookToGive, to, from } = trade

  if (status === 'accepted') {
    return Promise.all([
      this.findByIdAndUpdate({ _id: bookToGet }, { $set: { owner: from, tradeable: true } }, { new: true }),
      this.findByIdAndUpdate({ _id: bookToGive }, { $set: { owner: to, tradeable: true } }, { new: true })
    ])
   
  }
  else if (status === 'declined') {
    return Promise.all([
      this.findByIdAndUpdate({ _id: bookToGet }, { $set: { tradeable: true } }, { new: true }),
      this.findByIdAndUpdate({ _id: bookToGive }, { $set: { tradeable: true } }, { new: true })
    ])
  }
  else {
    return Promise.all([
      this.findByIdAndUpdate({ _id: bookToGet }, { $set: { tradeable: true } }, { new: true }),
      this.findByIdAndUpdate({ _id: bookToGive }, { $set: { tradeable: true } }, { new: true })
    ])
  }
}



export default mongoose.model('Book', bookSchema)

