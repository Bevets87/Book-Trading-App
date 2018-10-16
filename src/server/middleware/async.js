export const toClient = (async) => async (req, res) => {
  try {
    const response = await async(req, res)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const next = (async) => async (req, res, next) => {
  try {
    await async(req, res)
    next()
  } catch (error) {
    res.status(400).json(error)
  }
}

export const getIdFromParams = (async) => async (req, res, next, id) => {
  req.id = id
  try {
    const doc = await async(req, res)
    req.docFromId = doc 
    next()
  } catch (error) {
    res.status(400).json(error)
  }
}



export default {
  toClient,
  next,
  getIdFromParams
}