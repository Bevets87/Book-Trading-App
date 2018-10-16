/* eslint-disable */
const User = require('../../../server/models/user')
const request = require('supertest')
const server = require('../../../server')
const db = require('../../../server/db')
const { populate } = require('../helpers')


describe('/api/users routes', () => {
  let user


  beforeAll((async () => { await db.connect() }))

  afterAll((async () => { await db.disconnect() }))

  beforeEach(async () => {
    [user] = await populate(User)([
      { username: 'test@test.com', password: 'password', city: 'Hartford', state: 'CT' }
      
    ])
   

  })

  afterEach(async () => {
    await db.getConnection().collections.users.drop()
    
  


  })



  it('can POST /api/users', async () => {
    const userInfo = {
      username: 'testTwo@test.com',
      password: 'password',
      passwordConfirmation: 'password',
      city: 'Boston',
      state: 'MA'
    }
    
    const response = await request(server)
      .post('/api/users')
      .send(userInfo)
      .set('Connection', 'keep-alive')
   
    const newUser = response.body
    expect(response.status).toEqual(200)
    expect(newUser.username).toContain('testTwo@test.com')
     
    

      
  })
  
  it('can GET /api/users/me', async () => {
    const token = await user.authToken()
    
    const response = await request(server)
      .get('/api/users/me')
      .set('Connection', 'keep-alive')
      .set('authorization', token)
    
    expect(response.body.username).toContain('test@test.com')
  })

  it('can POST /api/users/me', async () => {
    
    const token = await user.authToken()
    const userInfo = {
      city: 'Boston',
      state: 'MA'
    }
    const response = await request(server)
      .post('/api/users/me')
      .send(userInfo)
      .set('Connection', 'keep-alive')
      .set('authorization', token)
     
      
    expect(response.status).toEqual(200)
    expect(response.body.username).toContain('test@test.com')
    expect(response.body.city).toContain('Boston')
        
    

  
  })


  it('can DELETE /api/users/me', async () => {
    
    const token = await user.authToken()
   

    const response = await request(server)
      .get('/api/users/me')
      .set('Connection', 'keep-alive')
      .set('authorization', token)
      
    expect(response.body.username).toContain('test@test.com')
        
      

  
  })



})
