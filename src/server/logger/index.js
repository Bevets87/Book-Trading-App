import { createLogger, transports, format } from 'winston'

export default createLogger({
  transports: [
    new transports.Console({
      format: format.json()
    })
  ]
})
