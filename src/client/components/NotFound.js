import React, { Component } from 'react'
import { object, string } from 'prop-types'
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
    const { width = null, height = null } = this.props 
    return(
      <Container width={width} height={height}>
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
  staticContext: object,
  width: string,
  height: string 
}

export default NotFound