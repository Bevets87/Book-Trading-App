import React, { Component } from 'react'
import { func, object, array, number, bool, string } from 'prop-types'

import PaginatedList from '../hocs/PaginatedList'

import { Container, Buttons, Button, Header, Box, BookIconContainer, BlackBookIcon } from '../styles/components/TradeRequest'
import { Container as Book, Cover, Button as BookButton, LineThrough } from '../styles/components/Book'

export const BookToTrade = ({ tradeable, onClick, image, _id, selected  }) => {
  if (selected) {
    return (
      <Book>
        <Cover borderColor={'black'} src={image} />
        <BookButton color={'red'} backgroundColor={'white'} borderColor={'black'}>Selected</BookButton>
      </Book>
    )
  } else {
    if (tradeable) {
      return (
        <Book>
          <Cover src={image} onClick={() => { onClick(_id) }} />
          <BookButton>Select</BookButton>
        </Book>
      )
    } else {
      return (
        <Book>
          <Cover src={image} borderColor={'black'} />
          <BookButton color={'black'} backgroundColor={'white'} borderColor={'black'}><LineThrough>Select</LineThrough></BookButton>
        </Book>
      )
    }
  }
  
 
}

BookToTrade.propTypes = {
  tradeable: bool,
  selected: bool,
  image: string,
  _id: string,
  onClick: func 
}

class TradeRequest extends Component {
  state = { selected: null }
  selectBookToTrade = (_id) => {
    this.setState({ selected: _id })
  }
  handleRequestTrade = () => {
    if (this.state.selected) {
      this.props.requestTrade({
        to: this.props.bookToGet.owner._id,
        bookToGet: this.props.bookToGet._id,
        bookToGive: this.state.selected
      })
    }
    this.props.unmount()
  }
  render() {
    const { unmount, ownedBooks, fetch, count, limit, skip } = this.props
    return(
      <Container>
        <Header>
          <BookIconContainer><BlackBookIcon />Select a book to trade</BookIconContainer>
        </Header>
        <Box>
          <PaginatedList response={ownedBooks} fetch={fetch} count={count} skip={skip} limit={limit}>
          {({_id, tradeable, image }) => <BookToTrade 
            key={_id} 
            _id={_id} 
            selected={this.state.selected ? this.state.selected == _id ? true : false : false} 
            tradeable={tradeable} 
            image={image} 
            onClick={this.selectBookToTrade} 
          />
          }
          </PaginatedList>
        </Box>
        <Buttons>
          <Button onClick={unmount}>Cancel</Button>
          <Button onClick={this.handleRequestTrade}>Trade</Button>
        </Buttons>
      </Container>
    )
  }
}

TradeRequest.propTypes = {
  unmount: func,
  bookToGet: object,
  ownedBooks: array,
  requestTrade: func,
  fetch: func,
  limit: number,
  skip: number,
  count: number,
}

export default TradeRequest 