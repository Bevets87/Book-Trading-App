const merge = require('webpack-merge')
const baseConfig = require('./base')

let envConfig = process.env.NODE_ENV === 'development' ? require('./dev') : require('./prod')

module.exports = merge(baseConfig, envConfig)