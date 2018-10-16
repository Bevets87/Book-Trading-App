import React, { Component } from 'react'
import { object } from 'prop-types'

import {
  Nav,
  BookIconContainer,
  BookIconTitle,
  Button,
  BlackBookIcon,
} from '../styles/components/Header'

class UnauthHeader extends Component {
  isPathname = (pathname) => {
    return this.props.history.location.pathname === pathname 
  }
  isSignInPage = () => {
    return this.isPathname('/signin')
  }
  navigateToLandingPage = () => {
    this.props.history.push('/')
  }
  navigateToSignInPage = () => {
    this.props.history.push('/signin')
  }
  navigateToSignUpPage = () => {
    this.props.history.push('/signup')
  }
  renderSignInButton = () => {
    return <Button onClick={this.navigateToSignInPage}>Sign In</Button>
  }
  renderSignUpButton = () => {
    return <Button onClick={this.navigateToSignUpPage}>Sign Up</Button>
  }
  renderLogo = () => {
    return (
      <BookIconContainer onClick={this.navigateToLandingPage}>
        <BlackBookIcon />
        <BookIconTitle>Booktrader</BookIconTitle>
      </BookIconContainer>
    )
  }
  render() {
    return (
      <Nav>
        {this.renderLogo()}
        {this.isSignInPage() ? this.renderSignUpButton() : this.renderSignInButton()}
      </Nav>
    )
  }
}

UnauthHeader.propTypes = {
  history: object
}

export default UnauthHeader 

