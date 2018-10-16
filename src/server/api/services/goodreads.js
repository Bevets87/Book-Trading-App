/* eslint-disable no-unused-vars */
import axios from 'axios'
import xmlToJson from '../utils/xmlToJson'
import config from '../../../../config/env'
import { toClient } from '../../middleware/async'

const _getBookFromResponse = (response) => Promise.resolve(response.GoodreadsResponse.search.results.work[0].best_book)
const _formatBook = ({ id, title, author, image_url }) => Promise.resolve([{ id, title, author: author.name, image: image_url }])

export const getBookBySearchTerm = (req, res) => new Promise((resolve, reject) => {
  const searchTerm  = req.body.searchTerm
  axios.get(`${config.goodreads.url}/search.xml?key=${config.goodreads.key}&q=${searchTerm}`)
  .then((response) => xmlToJson(response.data))
  .then(_getBookFromResponse)
  .then(_formatBook)
  .then((results) => { resolve(results) })
  .catch((error) => {return reject({ ...error, message: 'Goodreads api failed' }) })
})


export default {
  getBookBySearchTerm: toClient(getBookBySearchTerm)
}






