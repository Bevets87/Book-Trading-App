const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const noFavicon = require('no-favicon')
 
module.exports = (app) => {
  app.use(noFavicon())
  app.use(compression())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(helmet())
}