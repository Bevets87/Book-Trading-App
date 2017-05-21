import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../webpack.config.dev'

import user from './routes/user'
import api from './routes/api'
import book from './routes/book'
import request from './routes/request'

let app = express()

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, '../client' )))

app.use(bodyParser.json())
app.use('/', user)
app.use('/api', api)
app.use('/books', book)
app.use('/trades', request)



app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
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
