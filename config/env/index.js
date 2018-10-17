const { merge } = require('lodash')

let baseConfig = {
  port: 3000,
  host: '0.0.0.0'
}

let envConfig

if (process.env.NODE_ENV === 'development') {
  envConfig = require('./dev')
}
else if (process.env.NODE_ENV === 'production') {
  envConfig = require('./prod')
}
else if (process.env.NODE_ENV === 'testing') {
  envConfig = require('./testing')
}
else {
  envConfig = require('./dev')
}

module.exports = merge(baseConfig, envConfig)