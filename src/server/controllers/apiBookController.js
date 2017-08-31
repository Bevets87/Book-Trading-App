import mongoose from 'mongoose'
import _ from 'lodash'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import XMLConverter from 'xmljson'
import { JWT_SECRET, API_KEY } from '../config'


export const handle_get_api_book = (req, res) => {
  const { searchTerm, token} = req.body
  jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET, (err, decoded) => {
    if (!err) {
      axios.get(`https://www.goodreads.com/search.xml?key=${process.env.API_KEY || API_KEY}&q=${searchTerm}`)
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
    } else {
      res.json({errors: 'Invalid User'})
    }
  })
}
