import React, { Component } from 'react'
import { array, func } from 'prop-types'

import {
  Container,
  LeftButton,
  LeftArrowIcon,
  RightButton,
  RightArrowIcon,
  Body,
  Footer
} from '../styles/components/List'

class List extends Component {
  render() {
    const { next, prev, response } = this.props
    return (
      <Container>
        <Body>
          {response.map((item) => this.props.children(item))}
          <Footer>
            <LeftButton onClick={prev}><LeftArrowIcon /></LeftButton>
            <RightButton onClick={next}><RightArrowIcon /></RightButton>
          </Footer>
        </Body>
      </Container>
    )
  }
}

List.propTypes = {
  response: array,
  prev: func,
  next: func,
  children: func

}

export default List 


