/* eslint-disable no-unused-vars */
import Book from '../models/book'
import { getIdFromParams, toClient } from '../../middleware/async'

export const getById = (req, res) => new Promise((resolve, reject) => {
 Book.findById(req.id)
  .then((book) => { resolve(book) })
  .catch((error) => { reject(error) } )
}) 

export const getAllUnowned = (req, res) => new Promise((resolve, reject) => {
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

export const getAllOwned = (req, res) => new Promise((resolve, reject) => {
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


export const removeOne = (req, res) => new Promise((resolve, reject) => {
  const id = req.docFromId._id
  
  Book.findOneAndRemove({ _id: id })
  .then((book) => { resolve(book) })
  .catch((error) => { reject({ ...error, message: 'Unable to remove book' }) })
})

export const createOne = (req, res) => new Promise((resolve, reject) => {
  const { title, author, image } = req.body
  const newBook = new Book({ title, author, image, owner: req.decoded._id })
  
  newBook.save()
  .then((book) => { resolve(book) })
  .catch((error) => { reject({ ...error, message: 'Unable to create book' }) })
})



export default {
  getById: getIdFromParams(getById),
  getAllUnowned: toClient(getAllUnowned),
  getAllOwned: toClient(getAllOwned),
  removeOne: toClient(removeOne),
  createOne: toClient(createOne),
}



