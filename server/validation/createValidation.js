const joi = require('joi')

module.exports = (schema) => (body) => new Promise((resolve, reject) => {
  joi.validate(body, schema)
    .then(() => resolve(body))
    .catch((error) => reject(error))
})

