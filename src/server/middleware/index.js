import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
 
export default (app) => {
  app.use(compression())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(helmet())
}