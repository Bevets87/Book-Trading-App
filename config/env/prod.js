const jwt = { 
  secret: process.env.JWT_SECRET,
  expiration: process.env.JWT_EXPIRATION
}

const port = process.env.PORT

const host = process.env.HOST

const goodreads = { 
  key: process.env.GOODREADS_KEY,
  url: process.env.GOODREADS_URL 
}
const db = { 
  url: process.env.MONGODB_URI
}

module.exports = {
  host,
  port,
  jwt,
  goodreads,
  db
}

