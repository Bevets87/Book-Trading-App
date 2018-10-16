import apiRouter from './routes/api'
import authRouter from './routes/auth'
import requireAuth from '../middleware/requireAuth'


export default (app) => {
  app.use('/auth', authRouter)
  app.use('/api', requireAuth, apiRouter)
}