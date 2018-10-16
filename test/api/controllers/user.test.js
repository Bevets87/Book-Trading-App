/* eslint-disable */

import User from '../../../src/api/models/user'
import db from '../../../src/db'
import { populate } from '../helpers'
import {
  validatePassword,
  getByUsername,
  getByDecodedId,
  isNewUsername,
  removeOne,
  updateUserInfo,
  createOne,
  authenticate
} from '../../../src/api/controllers/user'


describe('userController', () => {
  let res, user

  beforeAll((async () => { 
    await db.connect()
    
     
  }))

  afterAll((async () => { await db.disconnect() }))

  beforeEach(async () => {
    
    [ user ] = await populate(User)([{ username: 'test@test.com', password: 'password', city: 'Hartford', state: 'CT' }])
    res = {
      json: jest.fn(function () { return this }),
      setHeader: jest.fn(function () { return this }),
      status: jest.fn(function () { return this })
    }
  })

  afterEach(async () => {
   await db.getConnection().collections.users.drop()
    
    
  })



 
  it('can authenticate()', () => {
    

    const req = { user }
    authenticate(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.setHeader).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledTimes(1)
  
  })

  it('can updateInfo() ', async () => {
    
    const decoded = user
    const body = { username: user.username, city: 'Providence', state: 'RI' }
    const req = { decoded, body }
    
    const updated = await updateUserInfo(req, res)
    
    expect(updated.city).toContain('Providence')
    
    expect(updated.state).toContain('RI')
  })



  it('can removeOne()', async () => {
    
    const decoded = user
    const req = { decoded }
    await removeOne(req, res)
    const users = await User.find({})
    expect(users.length).toEqual(0)
      
  
  })


  it('can createOne()', async () => {
    const userInfo = {
      username: 'testTwo@test.com',
      password: 'password',
      city: 'Boston',
      state: 'MA'
    }
    const req = {
      body: userInfo
    }

    await createOne(req, res)
    const users = await User.find({})
    expect(users.length).toEqual(2)
    expect(res.setHeader).toHaveBeenCalledTimes(1)
  })



  it('can isNewUsername() and validate', async () => {
    const username = 'newuser'
    const req = {
      body: username
    }
    const response = await isNewUsername(req, res)
    expect(response.message).toContain('user does not exist')
  })

  it('can isNewUsername() and invalidate', async () => {
    const username = 'test@test.com'
    const req = {
      body: username
    }
    try {
      await isNewUsername(req, res)
    } catch (error) {
      exepct(error.message).toContain('user exists')
    }

  })

  it('can getByDecodedId()', async () => {
  
    const _id = user._id 
    const decoded = { _id }
    const req = { decoded }
    await getByDecodedId(req, res)
    expect(req.user.toClient().username).toContain('test@test.com') 
  })

  it('can getByUsername()', async () => {
    const username = 'test@test.com'
    const req = { body: { username  } }
    await getByUsername(req, res)
    expect(req.user.toClient().username).toContain('test@test.com')
  })

  it('can validatePassword() and succeed', async () => {
    
    const password = 'password'
    const req = { 
      user,
      body: { password }
    }
    const response = await validatePassword(req, res)
    expect(response.message).toContain('valid password')
  })
  
  it('can validatePassword() and throw error', async () => {
    
    const password = 'pwojeogjmega'
    const req = {
      user,
      body: { password }
    }
    try {
      await validatePassword(req, res)
    } catch (error) {
      expect(error.message).toContain('invalid')
    }
  })



 











})