const jwt = require('jsonwebtoken')
const config = require('../../config/env')

/*eslint-disable*/

module.exports =  (req, res, next) => {
  const { token } = req.cookies

  const clearTokenAndExit = (error = null) => {
    res.clearCookie('token')
    return res.status(400).send({ ...error, message: 'Not Found' })
  }

  
  if (!token) {
    return clearTokenAndExit()
  }
  
  jwt.verify(token, config.jwt.secret, (error, decoded) => {
    if (error) {
      return clearTokenAndExit(error)
    }

    if (decoded.exp <= (Date.now() / 1000)) {
      return clearTokenAndExit()
    }
    
    req.decoded = decoded 
    next()
  })
}