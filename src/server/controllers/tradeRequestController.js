import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import  config from '../config'
const { JWT_SECRET } = config
import TradeRequest from '../models/TradeRequest'

export const handle_get_requests = (req, res) => {
  TradeRequest.find()
  .populate('getBook')
  .populate('giveBook')
  .populate('to')
  .populate('from')
  .exec((err, tradeRequests) => {
    if (err) return console.error(err)
      res.json({tradeRequests: tradeRequests})
  })
}

export const handle_create_request = (req, res) => {
  const {to, from, getBookID, giveBookID, token } = req.body
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      let tradeRequest = new TradeRequest({
        to: to,
        from: from,
        getBook: getBookID,
        giveBook: giveBookID,
        tradeResponse: false
      })
    tradeRequest.save((err, tradeRequest) => {
      if (err) return console.error(err)
        console.log(tradeRequest)
        res.json({tradeRequest: tradeRequest})
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}

export const handle_delete_request = (req, res) => {
  const { tradeID, token } = req.body
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (!err) {
      TradeRequest.findOneAndRemove({_id: tradeID}, (err, tradeRequest) => {
        if (err) return console.error(err)
        console.log(tradeRequest)
        res.json({tradeRequest: tradeRequest})
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}
