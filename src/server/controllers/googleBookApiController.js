import mongoose from 'mongoose'
import _ from 'lodash'
import axios from 'axios'
import config from '../config'
const { API_KEY } = config

export const handle_get_google_book = (req, res) => {
  const { searchTerm } = req.body
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`)
  .then (
    response => {
      console.log(response)
    }
  )
  .catch (
    error => {
      console.log(error)
    }
  )
}
