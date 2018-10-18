import React, { Component } from 'react'
import { object, func } from 'prop-types'

import { Container, Form, Title, Label, Input, Button, ErrorMessage, ErrorContainer } from '../styles/components/Form'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    city: '',
    st8: ''
  }
  componentWillUnmount() {
    this.props.clearError()
  }
  handleOnChange = (e) => {
    switch(e.target.name) {
      case 'username': 
      this.setState({ username: e.target.value })
      break
      case 'password':
      this.setState({ password: e.target.value })
      break
      case 'password-confirmation':
      this.setState({ passwordConfirmation: e.target.value })
      break
      case 'city':
      this.setState({ city: e.target.value })
      break
      case 'st8':
      this.setState({ st8: e.target.value })
      break
      default:
      break 
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUpUser(this.state)
  }
  renderErrorMessage() {
    return <ErrorMessage>{this.props.error.message}</ErrorMessage>
  }
  render() {
    let { username, password, passwordConfirmation, city, st8 } = this.state 
    return (
      <Container>
        <Form>
          <Title>Sign Up</Title>
          <Label htmlFor='username'>Username</Label>
          <Input type='text' name='username' value={username} onChange={this.handleOnChange} />

          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password' value={password} onChange={this.handleOnChange} />

          <Label htmlFor='password-confirmation'>Password Confirmation</Label>
          <Input type='password' name='password-confirmation' value={passwordConfirmation} onChange={this.handleOnChange} />

          <Label htmlFor='city'>City</Label>
          <Input type='text' name='city' value={city} onChange={this.handleOnChange} />
            
          <Label htmlFor='st8'>State</Label>
          <Input type='text' name='st8' value={st8} onChange={this.handleOnChange} />
        
          <Button onClick={this.handleSubmit}>Submit</Button>
          <ErrorContainer>{this.props.error ? this.renderErrorMessage() : null}</ErrorContainer>
        </Form>
      </Container>
    )
  }
}

SignUp.propTypes = {
  signUpUser: func,
  error: object,
  clearError: func  
}

export default SignUp