import React, { Component } from 'react'
import { func, object } from 'prop-types' 

import { 
  Label,
  Input,
  Button,
  Form,
  MessageBox,
  HiLite 
} from '../styles/components/AccountForm'

class ChangePassword extends Component {
  state = { 
    password: '', 
    newPassword: '', 
    newPasswordConfirmation: '' 
  }
  componentWillUnmount() {
    this.props.clearResponse()
    this.props.clearError()
  }
  handleOnChange = (e) => {
    switch(e.target.name) {
      case 'old password':
      this.setState({ password: e.target.value })
      break
      case 'new password':
      this.setState({ newPassword: e.target.value })
      break 
      case 'new password confirmation':
      this.setState({ newPasswordConfirmation: e.target.value })
      break 
      default:
      break 
    }
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.clearResponse()
    this.props.clearError()
    this.props.changePassword(this.state)
  }
  renderSuccessMessage() {
    const { response } = this.props 
    return <HiLite color={'green'}>{response.message}</HiLite>
  }
  renderFailureMessage() {
    const { error } = this.props 
    return <HiLite color={'red'}>{error.message}</HiLite>
  }
  render() {
    return(
        <Form>
          <Label htmlFor='password'>Old password</Label>
          <Input type='password' name='old password' onChange={this.handleOnChange} />

          <Label htmlFor='new password'>New password</Label>
          <Input type='password' name='new password' onChange={this.handleOnChange} />

          <Label htmlFor='confirm new password'>New password confirmation</Label>
          <Input type='password' name='new password confirmation' onChange={this.handleOnChange} />

          <Button onClick={this.handleClick}>Change password</Button>
          <MessageBox>
            {this.props.response ? this.renderSuccessMessage() : null}
            {this.props.error ? this.renderFailureMessage() : null}
          </MessageBox>
        </Form>

    )
  }
}

ChangePassword.propTypes = {
  response: object,
  error: object,
  clearResponse: func,
  clearError: func,
  changePassword: func 
}

export default ChangePassword 


