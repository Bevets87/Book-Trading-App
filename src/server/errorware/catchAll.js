/*eslint-disable*/
import logger from '../logger'

export default (error, req, res, next) => {
  logger.debug(error)
  res.status(500).json(error)
}