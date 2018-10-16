import mongoose from 'mongoose'
import logger from '../logger'
import config from '../../../config/env'

mongoose.Promise = global.Promise

export default {
  connect: () => {
  mongoose.connect(config.db.url, { useNewUrlParser: false })

  return mongoose.connection
    .once('open', () => {
      logger.info(`db connected to ${config.db.url}`)
      
    })
    .on('error', error => {
      logger.error(error.message)
      
    })
  },

  disconnect: () => {
    mongoose.disconnect()

    return mongoose.connection
      .once('close', () => {
        logger.info(`db disconnected from ${config.db.url}`)
      
      })
      .on('error', error => {
        logger.error(error.message)
      
      })
  },
  
  getConnection: () => {
    return mongoose.connection
  }
}