const express = require('express')
const db = require('./db')
const applyMiddleware = require('./middleware')
const applyApi = require('./api')
const applyWebpack = require('./middleware/applyWebpack')

const app = express()

if (!(process.env.NODE_ENV === 'testing')) {
  db.connect()
}

applyMiddleware(app)
applyApi(app)
applyWebpack(app)

