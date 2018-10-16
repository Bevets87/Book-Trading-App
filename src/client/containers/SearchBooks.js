import React from 'react'
import { func, array, object, string, bool } from 'prop-types'
import { connect } from 'react-redux'
import parseError from '../utils/parseError'
import goodreadsActions from '../redux/actions/goodreads'
import withAuth from '../hocs/withAuth'

import { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import RedirectToLanding from '../components/RedirectToLanding'

import {
  Paragraph,
  Button,
  ResultsBox,
  BookBox,
  SearchBox,
  Input,
  ButtonsBox,
  BookCover,
  BookTitle,
  BookButtons,
  BookAuthor 
} from '../styles/components/SearchBooks'

import {
  PulsatingSearch 
} from '../styles/components/Loading'


export const Search = ({ searchTerm, setSearchTerm, getBooks, reset }) => {
  return(
    <SearchBox>
      <Input type='text' placeholder={'Enter a title'} onChange={(e) => { setSearchTerm(e.target.value) }} value={searchTerm} />
      <ButtonsBox>
        <Button onClick={() => { getBooks() }}>Submit</Button>
        <Button onClick={() => { reset() }}>Clear</Button>
      </ButtonsBox>
    </SearchBox>
    
  )
}

Search.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
  getBooks: func,
  reset: func 
}

export const Success = ({ response, claimBook, reset }) => {
  return(
    <ResultsBox>
      {response.map(({ id, image, author, title }) => {
        return(
          <BookBox key={id} >
              <BookCover src={image} />
              <BookTitle>{title}</BookTitle>
              <BookAuthor>By:{author}</BookAuthor>
              <BookButtons>
                <Button onClick={() => { claimBook({ title, author, image }) } }>Claim</Button>
                <Button onClick={() => { reset() }}>Cancel</Button>
              </BookButtons>
          </BookBox>
        )
      })}
     
    </ResultsBox>
  )
}

Success.propTypes = {
  response: array,
  claimBook: func,
  reset: func 
}

export const Failure = ({ error, reset }) => {
  return(
    <ResultsBox>
      <Paragraph>{parseError(error)}</Paragraph>
      <Button onClick={() => { reset() }}>Got It!</Button>
    </ResultsBox>
  )
}

Failure.propTypes = {
  error: object,
  reset: func 
}

export const Loading = () => {
  return(
    <PulsatingSearch />
   )
}

const mapStateToProps = (state) => ({
  response: state.goodreads.response,
  error: state.goodreads.error,
  isLoading: state.goodreads.isLoading,
  searchTerm: state.goodreads.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => dispatch(goodreadsActions.async.getBooks()),
  claimBook: (book) => dispatch(goodreadsActions.async.claimBook(book)),
  reset: () => dispatch(goodreadsActions.creators.reset()),
  setSearchTerm: (searchTerm) => dispatch(goodreadsActions.creators.searchTerm(searchTerm))
})

const SearchBooksModes = ({ isLoading, error, reset, claimBook, searchTerm, response, getBooks, setSearchTerm }) => {
  if (isLoading) {
    return <Loading />
  } else if (error) {
    return <Failure error={error} reset={reset} />
  } else if (response) {
    return <Success response={response} claimBook={claimBook} reset={reset} />
  } else {
    return <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} getBooks={getBooks} reset={reset} />
  }
}

SearchBooksModes.propTypes = {
  isLoading: bool,
  error: object,
  reset: func,
  claimBook: func,
  searchTerm: string,
  response: array,
  getBooks: func,
  setSearchTerm: func 
}

const ConnectedSearchBooks = connect(mapStateToProps, mapDispatchToProps)(SearchBooksModes)

class SearchBooksContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>Search books</title>
        <meta property="og:title" content="Search books" />
      </Helmet>
    )
  }
  renderBody() {
    return(
      <AccountHeader title={'Search for books to claim'}>
        <ConnectedSearchBooks {...this.props} />
      </AccountHeader>
    )
  }
  render() {
    return(
      <div>
        {this.renderHead()}
        {this.renderBody()}
      </div>
    )
  } 
}

export default withAuth({
  Auth: SearchBooksContainer,
  Unauth: RedirectToLanding
})
  

