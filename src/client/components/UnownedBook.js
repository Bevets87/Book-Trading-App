import React, { Component } from 'react'
import { string, bool, object, func } from 'prop-types'

import {
  Container,
  Cover,
  Button,
  LineThrough
} from '../styles/components/Book'

class UnownedBook extends Component {
  renderTradeable() {
    const { onClick, _id, image, title, owner } = this.props
    return (
      <Container onClick={() => { onClick({ _id, image, title, owner }) }}>
        <Cover src={image} />
        <Button>Request</Button>
      </Container>
    )
  }
  renderNotTradeable() {
    const { image } = this.props 
    return (
      <Container>
        <Cover src={image} borderColor={'black'} />
        <Button backgroundColor={'white'} color={'black'} borderColor={'black'}><LineThrough>Request</LineThrough></Button>
      </Container>
    )
  }
  render() {
    return this.props.tradeable ? this.renderTradeable() : this.renderNotTradeable()
  }
}

UnownedBook.propTypes = {
  _id: string,
  title: string,
  image: string,
  tradeable: bool,
  owner: object,
  onClick: func 
}

export default UnownedBook 