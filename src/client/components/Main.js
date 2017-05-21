import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userRegistrationRequest, userLoginRequest, setUser, setUserErrors } from '../actions/userActions'

import validateRegistrationInput from '../../server/shared/validations/register'

import Navbar from './Navbar'

import './Main.scss'

class Main extends Component {
  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      city: '',
      state: '',
      clientErrors: {
        email: '',
        password: '',
        passwordConfirmation: '',
        city: '',
        state: ''
      }
    }
    this.handleRegister = this.handleRegister.bind(this)
    this.handleRegisterInput = this.handleRegisterInput.bind(this)
    this.handleUserLoginRequest = this.handleUserLoginRequest.bind(this)
  }
  isRegistrationValid () {
    const { errors, isValid } = validateRegistrationInput(this.state)

    if (!isValid) {
      this.setState({
        clientErrors: errors
      })
    }

    return isValid
  }
  handleRegister (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {}
    })
    if (this.isRegistrationValid()) {
      userRegistrationRequest(this.state)
      .then(
        response => {
          const user = {
            email: response.data.email,
            _id: response.data._id,
            city: response.data.city,
            state: response.data.state,
            fullName: response.data.fullName
          }
          localStorage.setItem('token', response.data.token)
          this.props.dispatch(setUser(user, true))
          this.props.history.push('/all-books')
        })
      .catch(
        error => {
          this.props.dispatch(setUserErrors(error.response.data.errors))
        })
    }
  }
  handleRegisterInput (event) {
    this.setState({
      clientErrors: {
        email: '',
        password: '',
        passwordConfirmation: '',
        city: '',
        state: ''
      }
    })
    event.preventDefault()
    switch (event.target.id) {
    case 'email':
      this.setState({
        email: event.target.value
      })
      break
    case 'pwd':
      this.setState({
        password: event.target.value
      })
      break
    case 'pwd-confirmation':
      this.setState({
        passwordConfirmation: event.target.value
      })
      break
    case 'city':
      this.setState({
        city: event.target.value
      })
      break
    case 'state':
      this.setState({
        state: event.target.value
      })
      break
    }
  }
  handleUserLoginRequest (state) {
    userLoginRequest(state)
    .then(
      response => {
        const user = {
          email: response.data.email,
          _id: response.data._id,
          city: response.data.city,
          state: response.data.state,
          fullName: response.data.fullName
        }
        localStorage.setItem('token', response.data.token)
        this.props.dispatch(setUser(user, true))
        this.props.history.push('/all-books')
      })
    .catch(
      error => {
        this.props.dispatch(setUserErrors(error.response.data.errors))
      })
  }
  render () {
    const { clientErrors } = this.state
    const { serverErrors } = this.props
    return (
      <div>
        <Navbar serverErrors={this.props.serverErrors} userLoginRequest={this.handleUserLoginRequest} />
        <div className='container-fluid main-container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='col-sm-12 about-container'>
                  <h1>Share Books With Friends</h1>
                  <h2 className='search'><span className='glyphicon glyphicon-search'></span> Search for books</h2>
                  <h2 className='transfer'><span className='glyphicon glyphicon-transfer'></span> Trade with other users</h2>
                  <h2 className='book'><span className='glyphicon glyphicon-book'></span> Start reading!</h2>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='col-sm-12 register-container'>
                  <form>
                    <div className='register-title'>
                      <h1>Register:</h1>
                      <button type='submit' className='btn btn-primary' onClick={this.handleRegister}>Register</button>
                    </div>
                    <div className='form-group'>
                      <input placeholder='Email' type='email' className='form-control' id='email' onChange={this.handleRegisterInput} />
                      {clientErrors.email && <span className='error'>{clientErrors.email}</span>}
                    </div>
                    <div className='form-group'>
                      <input placeholder='Password' type='password' className='form-control' id='pwd' onChange={this.handleRegisterInput} />
                      {clientErrors.password && <span className='error'>{clientErrors.password}</span>}
                    </div>
                    <div className='form-group'>
                      <input placeholder='Password Confirmation' type='password' className='form-control' id='pwd-confirmation' onChange={this.handleRegisterInput} />
                      {clientErrors.passwordConfirmation && <span className='error'>{clientErrors.passwordConfirmation}</span>}
                    </div>
                    <div className='location-container'>
                      <div id='city-container' className='form-group'>
                        <input placeholder='City' type='text' className='form-control' id='city' onChange={this.handleRegisterInput} />
                        {clientErrors.city && <span className='error'>{clientErrors.city}</span>}
                      </div>
                      <div id='state-container' className='form-group'>
                        <input placeholder='State' type='text' className='form-control' id='state'  onChange={this.handleRegisterInput} />
                        {clientErrors.state && <span className='error'>{clientErrors.state}</span>}
                      </div>
                    </div>
                  </form>
                </div>
                  {serverErrors.registrationForm && <div className='main-server-error-container'><h2>{serverErrors.registrationForm}</h2></div>}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

Main.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  serverErrors: PropTypes.object
}

const mapStateToProps = (state) => {
  const { serverErrors } = state.userReducer

  return {
    serverErrors
  }
}
export default connect(mapStateToProps)(Main)
