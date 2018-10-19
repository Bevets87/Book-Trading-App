/*eslint-disable*/
const logger = require('../logger')

module.exports = (error, req, res, next) => {
  logger.debug(error)
  res.status(500).json(error)
}