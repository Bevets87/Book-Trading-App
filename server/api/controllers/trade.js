/* eslint-disable no-unused-vars */
const Trade = require('../models/trade')
const Book = require('../models/book')
const { getIdFromParams, toClient } = require('../../middleware/async')

const getById = (req, res) => new Promise((resolve, reject) => {
  Trade.findById(req.id)
    .then((trade) => { resolve(trade) })
    .catch((error) => { reject({message: 'Trade does not exist' }) })
}) 

const getIncomingTrades = (req, res) => new Promise((resolve, reject) => {
  const { skip, limit } = req.query 
  
  const query = () => Trade
  .find({ to: req.decoded._id, status: 'pending' })
  .skip(parseInt(skip))
  .limit(parseInt(limit))
  .populate('bookToGet', 'title')
  .populate('bookToGive', 'title')
  .populate('from', 'username')
    
  const count = () => Trade
  .find({ to: req.decoded._id })
  .countDocuments()
 
  Promise.all([ query(), count() ])
  .then((data) => { resolve(data) })
  .catch((error) => { reject({ message: 'Unable to get incoming trades' }) })
})

const getOutgoingTrades = (req, res) => new Promise((resolve, reject) => {
  const { skip, limit } = req.query 
  
  const query = () => Trade
  .find({ from: req.decoded._id })
  .skip(parseInt(skip))
  .limit(parseInt(limit))
  .populate('bookToGet', 'title')
  .populate('bookToGive', 'title')
  .populate('to', 'username')

  const count = () => Trade
  .find({ from: req.decoded._id})
  .countDocuments()

  Promise.all([ query(), count() ])
  .then((data) => { resolve(data)})
  .catch((error) => { reject({ ...error, message: 'Unable to get outgoing trades' }) })
  
})

const createOne = (req, res) => new Promise((resolve, reject) => {
  const { bookToGet, bookToGive, to } = req.body
  const newTrade = new Trade({ bookToGet, bookToGive, to, from: req.decoded._id })
  
  Book.update({_id: { $in: [ bookToGet, bookToGive ]} }, { tradeable: false }, { multi: true })
  .then(() => newTrade.save())
  .then((trade) => { resolve(trade) })
  .catch((error) => { reject({ message: 'Unable to create trade' }) })
})

const removeOne = (req, res) => new Promise((resolve, reject) => {
  const trade = req.docFromId
  const status = trade.status 
  if (status === 'pending') {
    Book.handleUpdateTradeStatus(trade, status)
      .then(() => Trade.findOneAndRemove({ _id: trade._id }))
      .then((trade) => { resolve(trade) })
      .catch((error) => { reject({ message: 'Unable to remove trade' }) })
    
  } else {
    Trade.findOneAndRemove({ _id: trade._id })
      .then((trade) => { resolve(trade) })
      .catch((error) => { reject({ message: 'Unable to remove trade' }) })
  }
 
})

const updateTradeStatus = (req, res) => new Promise((resolve, reject) => {
  const trade = req.docFromId
  const { status } = req.body
  
  Book.handleUpdateTradeStatus(trade, status)
  .then(() => Trade.findOneAndUpdate({ _id: trade._id }, { $set: { status } }, { new: true }))
  .then((trade) => { resolve(trade) })
  .catch((error) => { reject({ message: 'Unable to update trade' }) })
})



module.exports = {
  getById: getIdFromParams(getById),
  getIncomingTrades: toClient(getIncomingTrades),
  getOutgoingTrades: toClient(getOutgoingTrades),
  removeOne: toClient(removeOne),
  updateTradeStatus: toClient(updateTradeStatus),
  createOne: toClient(createOne)
}








