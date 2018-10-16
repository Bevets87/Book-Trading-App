/* eslint-disable */
import User from '../../../src/api/models/user'
import db from '../../../src/db'
import { populate } from '../helpers'

describe('User Model', () => {
  let user 
 
  beforeAll(async () => { await db.connect() })
  afterAll(async () => { await db.disconnect() })
  beforeEach(async () => {
    [ user ] = await populate(User)([{ username: 'test@test.com', password: 'password', city: 'Hartford', state: 'CT' }])
  })
  afterEach(async () => {
    await db.getConnection().collections.users.drop()
  })

  it('can hashPassword()', async () => {
    
    const hash = await user.hashPassword('password')
    expect(hash.length).toEqual(user.password.length)

  })

  it('can comparePassword() and validate', async () => {
    const isValid = await user.comparePassword('password')
    expect(isValid).toBeTruthy()
  })

  it('can comparePassword() and invalidate', async () => {
    const isValid = await user.comparePassword('12345678')
    expect(isValid).toBeFalsy()
  })

  it('can authToken() and return a token', async () => {
    const authToken = await user.authToken()
    expect(authToken.length).toBeGreaterThan(10)
  })

  it('toClient() and return properly formatted user data', () => {
    const userInfo = user.toClient()
    expect(userInfo.password).toBeUndefined()
    expect(userInfo.username).toMatch(user.username)
  })

})