import joi from 'joi'

export default (schema) => (body) => new Promise((resolve, reject) => {
  joi.validate(body, schema)
    .then(() => resolve(body))
    .catch((error) => reject(error))
})

