const { createLogger, transports, format } = require('winston')

module.exports = createLogger({
  transports: [
    new transports.Console({
      format: format.json()
    })
  ]
})
