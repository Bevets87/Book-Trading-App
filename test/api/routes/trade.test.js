/* eslint-disable */
const User = require('../../../server/models/user')
const Book = require('../../../server/models/book')
const Trade = require('../../../server/models/trade')
const request = require('supertest')
const server = require('../../../server')
const db = require('../../../server/db')
const { populate } = require('../helpers')


describe('/api/trades routes', () => {
  let users
  let books
  let trades

  beforeAll((async () => { await db.connect() }))

  afterAll((async () => { await db.disconnect() }))

  beforeEach(async () => {
    users = await populate(User)([
      { username: 'test@test.com', password: 'password', city: 'Hartford', state: 'CT' },
      { username: 'testTwo@test.com', password: 'password', city: 'Boston', state: 'MA' }
    ])
    books = await populate(Book)([
      { author: 'Author One', title: 'Book One', owner: users[0]._id },
      { author: 'Author Two', title: 'Book Two', owner: users[1]._id }
    ])
    trades = await populate(Trade)([
      { to: users[0]._id, from: users[1]._id, bookToGet: books[0]._id, bookToGive: books[1]._id }
    ])

  })

  afterEach(async () => {
    await db.getConnection().collections.users.drop()
    await db.getConnection().collections.books.drop()
    await db.getConnection().collections.trades.drop()


  })



  it('can GET /api/trades/incoming', async () => {
    const user = users[0]
    const token = await user.authToken()
    const response = await request(server)
      .get('/api/trades/incoming')
      .set('Connection', 'keep-alive')
      .set('authorization', token)

  
    expect(response.status).toEqual(200)
    expect(response.body.length).toEqual(1)
    

  })

  it('can GET /api/trades/outgoing', async () => {
    const user = users[1]
    const token = await user.authToken()
    const response = await request(server)
      .get('/api/trades/outgoing')
      .set('Connection', 'keep-alive')
      .set('authorization', token)

    expect(response.status).toEqual(200)
    expect(response.body.length).toEqual(1)
    
    

  })

  it('can POST /api/trades', async () => {
    const user = users[0]
    const trade = {
      to: users[1]._id.toString(),
      from: users[0]._id.toString(),
      bookToGet: books[1]._id.toString(),
      bookToGive: books[0]._id.toString()
    }
    const token = await user.authToken()
    const response = await request(server)
      .post('/api/trades')
      .send(trade)
      .set('Connection', 'keep-alive')
      .set('authorization', token)


    expect(response.status).toEqual(200)
    expect(response.body.status).toContain('pending')
    

  })

  it('can PUT /api/trades/:id', async () => {
    const user = users[0]
    const token = await user.authToken()
    const status = 'accepted'
    const trade = trades[0]
    const response = await request(server)
      .put(`/api/trades/${trade._id}`)
      .send({ status })
      .set('Connection', 'keep-alive')
      .set('authorization', token)

    expect(response.status).toEqual(200)
    expect(response.body.status).toContain('accepted')

  })


  it('can DELETE /api/trades/:id', async () => {
    const user = users[1]
    const token = await user.authToken()
    const trade = trades[0]

    const response = await request(server)
      .delete(`/api/trades/${trade._id}`)
      .set('Connection', 'keep-alive')
      .set('authorization', token)

    expect(response.body.status).toContain('pending')
  })




})
