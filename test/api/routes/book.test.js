/* eslint-disable */
const User = require('../../../server/models/user')
const Book = require('../../../server/models/book')
const Trade = require('../../../server/models/trade')
const request = require('supertest')
const server = require('../../../server')
const db = require('../../../server/db')
const { populate } = require('../helpers')


describe('/api/books routes', () => {
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
 
  
  
  it('can GET /api/books', async () => {
    const user = users[0]
    const token = await user.authToken()
    const response = await request(server)
      .get('/api/books')
      .set('Connection', 'keep-alive')
      .set('authorization', token)
    
    const unowned = response.body 
    expect(response.status).toEqual(200)
    expect(unowned.length).toEqual(1)
    expect(unowned[0].owner.username).toContain('testTwo@test.com')
      
  })

  it('can GET /api/books/me', async () => {
    const user = users[0]
    const token = await user.authToken()
    const response = await request(server)
      .get('/api/books/me')
      .set('Connection', 'keep-alive')
      .set('authorization', token)
    
    const owned = response.body
   
    expect(response.status).toEqual(200)
    expect(owned.length).toEqual(1)
    expect(owned[0].owner.username).toContain('test@test.com')

  })

  it('can POST /api/books/trade', async () => {
    const user = users[0]
    const { to, from, bookToGet, bookToGive } = trades[0]
    const token = await user.authToken()
    const response = await request(server)
      .post('/api/books/trade')
      .send({ to: to._id, from: from._id, bookToGet: bookToGet._id, bookToGive: bookToGive._id })
      .set('Connection', 'keep-alive')
      .set('authorization', token)
      
    
    const [ bookOne, bookTwo ] = response.body 
  
    expect(bookOne.owner.username).toContain('testTwo@test.com')
    expect(bookOne.title).toContain('Book One')
    expect(bookTwo.owner.username).toContain('test@test.com')
    expect(bookTwo.title).toContain('Book Two')
  
  })



  it('can POST /api/books', async () => {
    const user = users[0]
    const token = await user.authToken()
    const book = {
      author: 'Author Three',
      title: 'Book Three',
      owner: user._id
    }
    const response = await request(server)
      .post('/api/books')
      .send(book)
      .set('Connection', 'keep-alive')
      .set('authorization', token)

    expect(response.status).toEqual(200)
    expect(response.body.title).toContain('Book Three')
    expect(response.body.owner.username).toContain(user.username)
  })


  it('can DELETE /api/books/:id', async () => {
    const user = users[0]
    const token = await user.authToken()
    const book = books[0]

    const response = await request(server)
      .delete(`/api/books/${book._id}`)
      .set('Connection', 'keep-alive')
      .set('authorization', token)

    expect(response.body.title).toContain('Book One')
  })



  
})
