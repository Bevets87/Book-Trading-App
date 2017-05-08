import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'

import './Login.scss'

class Login extends Component {
  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: '',
      errors: null
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', () => {
      if (window.innerWidth == '768') {
        this.props.history.push('/')
      }
    })
  }
  handleInput (event) {
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
    }
  }
  handleLogin (event) {
    event.preventDefault()
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <Navbar />
        <main>
          <div className='container-fluid'>
          <div className='mobile-login-container'>
          <form>
            <h1>Login:</h1>
            <div className='form-group'>
              <input placeholder='Email' type='email' className='form-control' id='email' onChange={this.handleInput} />
            </div>
            <div className='form-group'>
              <input placeholder='Password' type='password' className='form-control' id='pwd' onChange={this.handleInput} />
            </div>
            <button type='submit' className='btn btn-primary' onClick={this.handleRegister}>Login</button>
          </form>
          </div>
          </div>
        </main>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object
}

export default Login
