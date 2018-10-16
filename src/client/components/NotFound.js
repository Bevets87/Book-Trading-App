import React, { Component } from 'react'
import { object } from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Container, Text, Button } from '../styles/components/Warning'

class NotFound extends Component {
  state = { redirect: false }
  redirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirectToLanding() {
    return <Redirect to='/' />
  }
  renderNotFound() {
    return(
      <Container>
        <Text>404 Not Found</Text>
        <Button onClick={this.redirect}>Go Home</Button>
      </Container>
    )
  }
  render() {
    const { staticContext = {} } = this.props 
    staticContext.notFound = true 
    return this.state.redirect ? this.renderRedirectToLanding() : this.renderNotFound()
  }
 
}

NotFound.propTypes = {
  staticContext: object
}

export default NotFound