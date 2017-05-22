import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import compression from 'compression'

import user from './routes/user'
import api from './routes/api'
import book from './routes/book'
import request from './routes/request'

let app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, '../../dist' )))

app.use(bodyParser.json())
app.use('/', user)
app.use('/api', api)
app.use('/books', book)
app.use('/trades', request)

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BookTradingApp');

mongoose.connection.once('open',function(){
  console.log('Connection has been made!')
}).on('error',function(error){
  console.log('Connection error:', error);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on localhost ${process.env.PORT || 3000}` )
})
