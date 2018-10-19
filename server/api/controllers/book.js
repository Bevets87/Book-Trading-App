/* eslint-disable no-unused-vars */
const Book = require('../models/book')
const { getIdFromParams, toClient } = require('../../middleware/async')

const getById = (req, res) => new Promise((resolve, reject) => {
 Book.findById(req.id)
  .then((book) => { resolve(book) })
  .catch((error) => { reject(error) } )
}) 

const getAllUnowned = (req, res) => new Promise((resolve, reject) => {
  const { skip, limit } = req.query
  
  const query = () => Book
  .find({ owner: { $ne: req.decoded._id } })
  .skip(parseInt(skip))
  .limit(parseInt(limit))
  .populate('owner', 'username')

  const count = () => Book
  .find({ owner: { $ne: req.decoded._id } })
  .countDocuments()
  
  Promise.all([ query(), count() ])
  .then((data) => { resolve(data) })
  .catch((error) => { reject(error) })
})

const getAllOwned = (req, res) => new Promise((resolve, reject) => {
  const { skip, limit } = req.query 
  
  const query = () => Book
  .find({ owner: req.decoded._id })
  .skip(parseInt(skip))
  .limit(parseInt(limit))
  .populate('owner', 'username')
  
  const count = () => Book
  .find({ owner: req.decoded._id })
  .countDocuments()
  
  Promise.all([ query(), count() ])
  .then((data) => { resolve(data) })
  .catch((error) => { reject(error) })
}) 


const removeOne = (req, res) => new Promise((resolve, reject) => {
  const id = req.docFromId._id
  
  Book.findOneAndRemove({ _id: id })
  .then((book) => { resolve(book) })
  .catch((error) => { reject({ ...error, message: 'Unable to remove book' }) })
})

const createOne = (req, res) => new Promise((resolve, reject) => {
  const { title, author, image } = req.body
  const newBook = new Book({ title, author, image, owner: req.decoded._id })
  
  newBook.save()
  .then((book) => { resolve(book) })
  .catch((error) => { reject({ ...error, message: 'Unable to create book' }) })
})



module.exports = {
  getById: getIdFromParams(getById),
  getAllUnowned: toClient(getAllUnowned),
  getAllOwned: toClient(getAllOwned),
  removeOne: toClient(removeOne),
  createOne: toClient(createOne),
}



