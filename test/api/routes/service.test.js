/* eslint-disable */
const User = require('../../../server/models/user')
const request = require('supertest')
const server = require('../../../server')
const db = require('../../../server/db')
const { populate } = require('../helpers')

describe('/api/services routes', () => {
    let user 
    beforeAll(async () => { await db.connect() })
  afterAll(async () => { await db.disconnect() })
    beforeEach(async () => { 
      [ user ] = await populate(User)([
        { username: 'test@test.com', password: 'password', city: 'Hartford', state: 'CT' }
      
      ])
    })
    afterEach(async () => {
      await db.getConnection().collections.users.drop()
    })

  it('can POST /api/services/goodreads', async () => {
    const token = await user.authToken()
    const searchTerm = 'Harry Potter'
  
    const response = await request(server)
      .post('/api/services/goodreads')
      .send({ searchTerm })
      .set('Connection', 'keep-alive')
      .set('authorization', token)
      
    const book = response.body
    expect(book.title).toContain('Harry Potter')
    



  })



})
