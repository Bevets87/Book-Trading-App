/* eslint-disable */
import User from '../../../src/api/models/user' 
import Book from '../../../src/api/models/book'
import Trade from '../../../src/api/models/trade'
import db from '../../../src/db'
import { populate } from '../helpers'
import { 
  getById, 
  getAllOwned,
  getAllUnowned,
  createOne,
  removeOne 
} from '../../../src/api/controllers/book'


describe('bookController', () => {
  let users
  let books
  let trades 
  

  beforeAll((async () => {
    await db.connect()

  }))

  afterAll((async () => { await db.disconnect() }))

  beforeEach(async () => {
    users = await populate(User)([
      { username: 'test@test.com', password: 'password', city: 'Hartford', st8: 'CT' },
      { username: 'testTwo@test.com', password: 'password', city: 'Boston', st8: 'MA' }
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
    const book = books[0]
    const req = { id: book._id }
    const res = jest.mock
    const found = await getById(req, res)
    expect(book.title).toContain('Book One')
  })

  it('can getAllUnowned()', async () => {
    const user = users[0]
    const decoded = user
    const req = { decoded }
    const res = jest.mock
    const unowned = await getAllUnowned(req, res)
    const [ unownedBook ] = unowned
    expect(unowned.length).toEqual(1)
    expect(unownedBook.title).toContain('Book Two')
    
  })

  it('can getAllOwned()', async () => {
    const user = users[0]
    const decoded = user
    const req = { decoded }
    const res = jest.mock
    const owned = await getAllOwned(req, res)
    const [ ownedBook ] = owned
    expect(owned.length).toEqual(1)
    expect(ownedBook.title).toContain('Book One')
  })

  it('can removeOne()', async () => {
    const docFromId = books[0]
    const req = { docFromId }
    const res = jest.mock
    const removed = await removeOne(req, res)
    expect(removed).toHaveProperty('title', 'Book One')
  })

  it('can createOne()', async () => {
    const book = {
      author: 'Author Three',
      title: 'Book Three',
      image: 'img-url',
      owner: users[0]._id.toString()
    }
    const req = { body: book }
    const res = jest.mock
    const created = await createOne(req, res)
    expect(created.title).toContain('Book Three')
  })





})