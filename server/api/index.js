const apiRouter = require('./routes/api')
const authRouter = require('./routes/auth')
const requireAuth = require('../middleware/requireAuth')

module.exports = (app) => {
  app.use('/auth', authRouter)
  app.use('/api', requireAuth, apiRouter)
}