import React, { Component } from 'react'
import { object, func } from 'prop-types'

import { Container, Form, Title, Label, Input, Button, ErrorMessage, ErrorContainer } from '../styles/components/Form'

class SignIn extends Component {
  state = { username: '', password: '' }
  renderErrorMessage = () => {
    return <ErrorContainer><ErrorMessage>{this.props.error.message}</ErrorMessage></ErrorContainer>
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
      default:
      break 
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signInUser(this.state)
  }
  render() {
    let { username, password } = this.state
    return (
      <Container>
        <Form>
          <Title>Sign In</Title>

          <Label htmlFor='username'>Username</Label>
          <Input type='text' name='username' value={username} onChange={this.handleOnChange} />

          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password'value={password} onChange={this.handleOnChange} />

          <Button onClick={this.handleSubmit}>Submit</Button>
          {this.props.error ? this.renderErrorMessage() : null}
        </Form>
      </Container>
    )
  }
}

SignIn.propTypes = {
  signInUser: func,
  error: object,
  clearError: func,
  history: object  
}

export default SignIn