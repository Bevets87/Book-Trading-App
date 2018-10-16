import React, { Component } from 'react'
import { object } from 'prop-types'

import { Container, Overlay, DesktopText, TabletText, Button } from '../styles/components/Landing'

class Landing extends Component {
  navigateToSignUpPage = () => {
    this.props.history.push('/signup')
  }
  render() {
   return (
      <Container>
        <Overlay>
          <DesktopText>Trade books anytime and anywhere</DesktopText>
          <TabletText>Booktrader</TabletText>
          <Button onClick={() => { this.navigateToSignUpPage() }}>Join for free</Button>
        </Overlay>
      </Container>
    )
  }
}

Landing.propTypes = {
  history: object 
}

export default Landing
