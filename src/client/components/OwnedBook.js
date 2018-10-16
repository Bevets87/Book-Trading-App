import React, { Component } from 'react'
import { string, bool, func } from 'prop-types'

import {
  Container,
  Cover,
  Button,
  LineThrough


} from '../styles/components/Book'

class OwnedBook extends Component {
  handleClick = (e) => {
    const { _id } = this.props 
    e.preventDefault()
    this.props.onClick(_id)
  }
  renderTradeable() {
    const { image } = this.props
    return (
      <Container onClick={this.handleClick}>
        <Cover src={image} />
        <Button>Remove</Button>
      </Container>
    )
  }
  renderNotTradeable() {
    const { image } = this.props
    return (
      <Container>
        <Cover src={image} borderColor={'black'}/>
        <Button backgroundColor={'white'} color={'black'} borderColor={'black'}><LineThrough>Remove</LineThrough></Button>
      </Container>
    )
  }
  render() {
    const { tradeable } = this.props
    return tradeable ? this.renderTradeable() : this.renderNotTradeable()
  }
}

OwnedBook.propTypes = {
  _id: string,
  image: string,
  onClick: func,
  tradeable: bool
}

export default OwnedBook 