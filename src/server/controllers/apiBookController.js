import mongoose from 'mongoose'
import _ from 'lodash'
import axios from 'axios'
import config from '../config'
import XMLConverter from 'xmljson'
const { API_KEY } = config

export const handle_get_api_book = (req, res) => {
  const title = req.body.searchTerm
  axios.get(`https://www.goodreads.com/search.xml?key=${API_KEY}&q=${title}`)
  .then(
    response => {
      var xml = response.data
      XMLConverter.to_json(xml, (err, result) => {
        if (err) return console.error(err)
        const bookData = result.GoodreadsResponse.search.results.work[0].best_book
        const apiBook = {
          id: bookData.id,
          title: bookData.title,
          author: bookData.author.name,
          cover: bookData.image_url
        }
        res.json({apiBook})
      })
    })
  .catch(
    error => {
      res.json({errors: error})
    })
}
