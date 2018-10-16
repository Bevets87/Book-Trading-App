import React, { Component } from 'react'
import { func, object } from 'prop-types'

import {
  Form,
  Label,
  Input,
  Button,
} from '../styles/components/AccountForm'

class EditProfile extends Component {
  state = { username: '', city: '', st8: '' }
  handleOnChange = (e) => {
    switch(e.target.name) {
      case 'username':
      this.setState({ username: e.target.value })
      break
      case 'city':
      this.setState({ city: e.target.value })
      break
      case 'state':
      this.setState({ st8: e.target.value })
      break
      default:
      break
    }
  }
  getUpdatedInfo() {
    let { username, city, st8 } = this.state
    const { userInfo } = this.props 
    return {
      username: username ? username : userInfo.username,
      city: city ? city : userInfo.city,
      st8: st8 ? st8 : userInfo.st8,
    }
  }
  handleUpdateUserInfo = (e) => {
    e.preventDefault()
    const updatedInfo = this.getUpdatedInfo()
    this.props.updateUserInfo(updatedInfo)
  }
  render() {
    let { username, city, st8 } = this.props.userInfo
    return(
        <Form>
          <Label htmlFor='username'>Username</Label>
          <Input type='text' name='username' placeholder={username} value={this.state.username} onChange={this.handleOnChange}/>

          <Label htmlFor='city'>City</Label>
          <Input type='text' name='city' placeholder={city} value={this.state.city} onChange={this.handleOnChange}/>

          <Label htmlFor='state'>State</Label>
          <Input type='text' name='state' placeholder={st8} value={this.state.st8} onChange={this.handleOnChange}/>

      
          <Button onClick={this.handleUpdateUserInfo}>Save Profile</Button>
        </Form>
      )
  }
}

EditProfile.propTypes = {
  userInfo: object,
  updateUserInfo: func
}

export default EditProfile