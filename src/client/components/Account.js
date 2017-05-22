import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateUser, setUser, setUserErrors } from '../actions/userActions'

import Navbar from './Navbar'

import './Account.scss'

class Account extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userFullName: '',
      userCity: '',
      userState: '',
      userID: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  componentDidMount () {
    const { user } = this.props
    this.setState({
      userFullName: user.fullName,
      userCity: user.city,
      userState: user.state,
      userID: user._id
    })
  }
  handleOnChange (event) {
    event.preventDefault()
    switch (event.target.id) {
    case 'userFullName':
      this.setState({userFullName: event.target.value})
      break
    case 'userCity':
      this.setState({userCity: event.target.value})
      break
    case 'userState':
      this.setState({userState: event.target.value})
      break
    }
  }
  handleUpdate (event) {
    event.preventDefault()
    let userData = this.state
    let token = localStorage.getItem('token')
    userData.token = token
    updateUser({userData})
    .then(
      response => {
        const user = {
          email: response.data.email,
          _id: response.data._id,
          city: response.data.city,
          state: response.data.state,
          fullName: response.data.fullName
        }
        this.props.dispatch(setUser(user, true))
        this.setState({
          userFullName: user.fullName,
          userCity: user.city,
          userState: user.state,
          userID: user._id
        })
      })
    .catch(
      error => {
        this.props.dispatch(setUserErrors(error.response.data.errors))
      })
  }
  render () {
    const { isAuthenticated, user } = this.props
    if (isAuthenticated) {
      return (
        <div>
          <Navbar />
          <div className='container-fluid account-container'>
            <h1><span className='glyphicon glyphicon-book'></span>Account</h1>
            <form className='account-info'>
              <h1>Information</h1>
              <div className='form-group'>
                <label>Full Name</label>
                <input id='userFullName' type='text' placeholder={user.fullName} onChange={this.handleOnChange} />
                <div className='button-container'>
                  <button onClick={this.handleUpdate} className='btn btn-primary'>update</button>
                </div>
              </div>
              <div className='form-group'>
                <label>City</label>
                <input id='userCity' type='text' placeholder={user.city} onChange={this.handleOnChange} />
                <div className='button-container'>
                  <button onClick={this.handleUpdate} className='btn btn-primary'>update</button>
                </div>
              </div>
              <div className='form-group'>
                <label>State</label>
                <input id='userState' type='text' placeholder={user.state} onChange={this.handleOnChange} />
                <div className='button-container'>
                  <button onClick={this.handleUpdate} className='btn btn-primary'>update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className='protected-page-container'>
          <h1>This is a protected page.</h1>
        </div>
      )
    }
  }
}

Account.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
  const { isAuthenticated, user } = state.userReducer
  return {
    isAuthenticated,
    user
  }
}

export default connect(mapStateToProps)(Account)
