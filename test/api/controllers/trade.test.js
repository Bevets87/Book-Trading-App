/* eslint-disable */
import User from '../../../src/api/models/user'
import Book from '../../../src/api/models/book'
import Trade from '../../../src/api/models/trade'
import db from '../../../src/db'
import { populate } from '../helpers'
import {
  getById,
  getIncomingTrades,
  getOutgoingTrades,
  createOne,
  removeOne,
  updateTradeStatus
} from '../../../src/api/controllers/trade'




describe('tradeController', () => {
  let users 
  let books 
  let trades 
  
  beforeAll((async () => { 
    await db.connect()
     
  }))
  
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


  

  it('can getById()', async () => {
    let [ trade ] = trades 
    const req = { id: trade._id }
    const res = jest.mock 
    const found = await getById(req, res)
    expect(found.equals(trade._id)).toBeTruthy()
  })

  it('can getOutgoingTrades()', async () => {
    const user = users[0]
    const decoded = user 
    const req = { decoded }
    const res = jest.mock
    const outgoing = await getOutgoingTrades(req, res)
    expect(outgoing.length).toEqual(0)
  })

  it('can getIncomingTrades()', async () => {
    const user = users[0]
    const decoded = user 
    const req = { decoded }
    const res = jest.mock 
    const incoming = await getIncomingTrades(req, res)
    expect(incoming.length).toEqual(1)
  })

  it('can removeOne()', async () => {
    const docFromId = trades[0]
    const req = { docFromId }
    const res = jest.mock 
    const removed = await removeOne(req, res)
    expect(removed.equals(docFromId._id)).toBeTruthy()
  })

  it('can createOne()', async () => {
    const trade = {
      to: users[1]._id.toString(),
      from: users[0]._id.toString(),
      bookToGet: books[1]._id.toString(),
      bookToGive: books[0]._id.toString()
    }
    const req = { body: trade }
    const res = jest.mock 
    const created = await createOne(req, res)
    expect(created.to.equals(users[1]._id)).toBeTruthy()
  })

  it('can updateTradeStatus()', async () => {
    const [ trade ] = trades
    const docFromId = trade
    const status = 'accepted'
    const req = { body: { status }, docFromId }
    const res = jest.mock
    
    const updated = await updateTradeStatus(req, res)
    expect(updated.equals(docFromId._id)).toBeTruthy()
    expect(updated.status).toContain('accepted')
  })

 

})