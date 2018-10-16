/* eslint-disable */
const goodreads = require('../../../server/services/goodreads')

describe('goodreads service', () => {

  it('can search the goodreads api for a book', async () => {
    const searchTerm = 'harry potter'
    const req = { body: { searchTerm } }
    const res = jest.mock
    const response = await goodreads.searchBook(req, res) 
    expect(response.title).toContain('Harry Potter')
    
    
  })
  
})
