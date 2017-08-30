import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import TradeRequest from '../models/TradeRequest'

export const handle_get_requests = (req, res) => {
  TradeRequest.find()
  .populate({
    path: 'getBook',
    populate: {
      path: 'owner'
    }
  })
  .populate({
    path: 'giveBook',
    populate: {
      path: 'owner'
    }
  })
  .populate('to')
  .populate('from')
  .exec((err, tradeRequests) => {
    if (err) return console.error(err)
    for (let i = 0; i < tradeRequests.length; i++) {
      let { to, from, getBook, giveBook } = tradeRequests[i]
      if ((to.email !== getBook.owner.email) || (from.email !== giveBook.owner.email)) {
        tradeRequests.splice(i,1)
      }
    }
    res.json({tradeRequests: tradeRequests})
  })
}

export const handle_create_request = (req, res) => {
  const {to, from, getBookID, giveBookID, token } = req.body
  jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET, (err, decoded) => {
    if (!err) {
      TradeRequest.findOne({to: to, from: from, getBook: getBookID, giveBook: giveBookID}, (err, tradeRequest) => {
        if (err) return console.error(err)
        if (!tradeRequest) {
          tradeRequest = new TradeRequest({
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
          tradeRequest.to = to
          tradeRequest.from = from
          tradeRequest.getBook = getBookID
          tradeRequest.giveBook = giveBookID
          res.json({tradeRequest: tradeRequest})
        }
      })
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}

export const handle_delete_request = (req, res) => {
  const { tradeID, token } = req.body
  jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET, (err, decoded) => {
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
