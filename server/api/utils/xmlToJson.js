const parser = require('xmljson/lib')

module.exports = (xml) => new Promise((resolve, reject) => {
  parser.to_json(xml, (error, data) => {
    if (error) reject(error)
    resolve(data)
  })
})