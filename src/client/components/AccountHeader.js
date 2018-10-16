import React, { Component } from 'react'
import { string, array, object, oneOfType, func } from 'prop-types' 

import { Container, Title } from '../styles/components/AccountHeader'

class AccountHeader extends Component {
  render() {
    return(
      <Container>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </Container>
    )
  }
}

AccountHeader.propTypes = {
  children: oneOfType([ array, object, func ]),
  title: string
}

export default AccountHeader