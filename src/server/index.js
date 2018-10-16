import express from 'express'
import db from './db'
import applyMiddleware from './middleware'
import applyApi from './api'
import applyWebpack from './middleware/applyWebpack'

const app = express()

if (!(process.env.NODE_ENV === 'testing')) {
  db.connect()
}

applyMiddleware(app)
applyApi(app)
applyWebpack(app)

