const createValidation = require('../validation/createValidation')

module.exports = (schema) => (req, res, next) => {
  const validateRequest = createValidation(schema)
  validateRequest(req.body)
  .then(() => { next() })
  .catch((error) => { res.status(400).json(error.details[0]) })
}