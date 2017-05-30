import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userRegistrationRequest, setUser, setUserErrors } from '../actions/userActions'

import validateRegistrationInput from '../../server/shared/validations/register'

import Navbar from './Navbar'

import './Register.scss'

class Register extends Component {
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
    this.handleInput = this.handleInput.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= '768') {
        this.props.history.push('/')
      }
    })
  }
  handleInput (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {
        email: '',
        password: '',
        passwordConfirmation: '',
        city: '',
        state: ''
      }
    })
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
  isValid () {
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
    if (this.isValid()) {
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
  render () {
    const { clientErrors } = this.state
    const { serverErrors } = this.props
    return (
      <div>
        <Navbar />
        <div className='container-fluid main-container'>
          <div className='mobile-register-container'>
          <form>
            <div className='register-title'>
              <button type='submit' className='btn btn-primary' onClick={this.handleRegister}>Register</button>
            </div>
            <div className='form-group'>
              <input placeholder='Email' type='email' className='form-control' id='email' onChange={this.handleInput} />
              {clientErrors.email && <span className='error'>{clientErrors.email}</span>}
            </div>
            <div className='form-group'>
              <input placeholder='Password' type='password' className='form-control' id='pwd' onChange={this.handleInput} />
              {clientErrors.password && <span className='error'>{clientErrors.password}</span>}
            </div>
            <div className='form-group'>
              <input placeholder='Password Confirmation' type='password' className='form-control' id='pwd-confirmation' onChange={this.handleInput} />
              {clientErrors.passwordConfirmation && <span className='error'>{clientErrors.passwordConfirmation}</span>}
            </div>
            <div className='form-group location-container'>
              <div id='city-container'>
                <input placeholder='City' type='text' className='form-control' id='city' onChange={this.handleInput} />
                {clientErrors.city && <span className='error'>{clientErrors.city}</span>}
              </div>
              <div id='state-container'>
                <input placeholder='State' type='text' className='form-control' id='state' onChange={this.handleInput} />
                {clientErrors.state && <span className='error'>{clientErrors.state}</span>}
              </div>
            </div>
          </form>
          </div>
          {serverErrors.registrationForm && <div className='register-server-error-container'><h2>{serverErrors.registrationForm}</h2></div>}
        </div>

      </div>
    )
  }
}

Register.propTypes = {
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
export default connect(mapStateToProps)(Register)
