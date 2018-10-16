import createValidation from '../validation/createValidation'

export default (schema) => async (req, res, next) => {
  const validateRequest = createValidation(schema)
  try {
    await validateRequest(req.body)
    next()
  } catch (error) {
    
    res.status(400).json(error.details[0])
  }
}