/* eslint-disable no-unused-vars */
const axios = require('axios')
const  xmlToJson = require('../utils/xmlToJson')
const  config = require('../../../config/env')
const  { toClient } = require('../../middleware/async')

const _getBookFromResponse = (response) => Promise.resolve(response.GoodreadsResponse.search.results.work[0].best_book)
const _formatBook = ({ id, title, author, image_url }) => Promise.resolve([{ id, title, author: author.name, image: image_url }])

const getBookBySearchTerm = (req, res) => new Promise((resolve, reject) => {
  const searchTerm  = req.body.searchTerm
  axios.get(`${config.goodreads.url}/search.xml?key=${config.goodreads.key}&q=${searchTerm}`)
  .then((response) => xmlToJson(response.data))
  .then(_getBookFromResponse)
  .then(_formatBook)
  .then((results) => { resolve(results) })
  .catch((error) => {return reject({ ...error, message: 'Goodreads api failed' }) })
})


module.exports = {
  getBookBySearchTerm: toClient(getBookBySearchTerm)
}






