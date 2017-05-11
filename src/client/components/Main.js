import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userRegistrationRequest, setUser, setErrors } from '../actions/userActions'

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
    this.handleInput = this.handleInput.bind(this)
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
          localStorage.setItem('token', response.data.token)
          this.props.dispatch(setUser(response.data.email, response.data.city, response.data.state, true))
          this.props.history.push('/dashboard')
        })
      .catch(
        error => {
          this.props.dispatch(setErrors(error.response.data.errors))
        })
    }
  }
  handleInput (event) {
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
  render () {
    const { clientErrors } = this.state

    return (
      <div>
        <Navbar />
        <main>
          <div className='container-fluid'>
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
                    <div className='location-container'>
                      <div id='city' className='form-group'>
                        <input placeholder='City' type='text' className='form-control' onChange={this.handleInput} />
                        {clientErrors.city && <span className='error'>{clientErrors.city}</span>}
                      </div>
                      <div id='state' className='form-group'>
                        <input placeholder='State' type='text' className='form-control'  onChange={this.handleInput} />
                        {clientErrors.state && <span className='error'>{clientErrors.state}</span>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
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
