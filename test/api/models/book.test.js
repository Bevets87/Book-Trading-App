/* eslint-disable */
import Book from '../../../src/api/models/book'
import Trade from '../../../src/api/models/trade'
import User from '../../../src/api/models/user'
import db from '../../../src/db'
import { populate } from '../helpers'

describe('Book Model', () => {
  let users, books, trades
  beforeAll(async () => { await db.connect() })
  afterAll(async () => { await db.disconnect() })
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

  it('can handleUpdateTradeStatus() when status is accepted', async () => {
    const [ userOne, userTwo ] = users
    const [ trade ] = trades
    const status = 'accepted'
    const [ oldBookOne, oldBookTwo ] = books
    
    expect(oldBookOne.owner.equals(userOne._id)).toBeTruthy()
    expect(oldBookTwo.owner.equals(userTwo._id)).toBeTruthy()
    const [ bookOne, bookTwo ] = await Book.handleUpdateTradeStatus(trade, status)
    expect(oldBookOne.title).toContain(bookOne.title)
    expect(oldBookTwo.title).toContain(bookTwo.title)
    expect(bookOne.owner.equals(userTwo._id)).toBeTruthy()
    expect(bookTwo.owner.equals(userOne._id)).toBeTruthy()
    expect(bookOne.tradeable).toBeTruthy()
    expect(bookTwo.tradeable).toBeTruthy()
  })

  it('can handleUpdateTradeStatus() when status is declined', async () => {
    const [userOne, userTwo] = users
    const [trade] = trades
    const status = 'declined'
    const [oldBookOne, oldBookTwo] = books

    expect(oldBookOne.owner.equals(userOne._id)).toBeTruthy()
    expect(oldBookTwo.owner.equals(userTwo._id)).toBeTruthy()
    const [bookOne, bookTwo] = await Book.handleUpdateTradeStatus(trade, status)
    expect(oldBookOne.title).toContain(bookOne.title)
    expect(oldBookTwo.title).toContain(bookTwo.title)
    expect(bookOne.owner.equals(userOne._id)).toBeTruthy()
    expect(bookTwo.owner.equals(userTwo._id)).toBeTruthy()
    expect(bookOne.tradeable).toBeTruthy()
    expect(bookTwo.tradeable).toBeTruthy()


  })
})