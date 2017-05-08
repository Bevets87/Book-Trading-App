import React, { Component } from 'react'

import './Navbar.scss'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleLogin (event) {
    event.preventDefault()
    console.log(this.state)
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
  render () {
    return (
      <nav>
        <div className='nav-logo-container'>
          <span className='glyphicon glyphicon-book'></span>
          <h2>BookTrader</h2>
        </div>
        <form className='form-inline'>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' placeholder='Email' onChange={this.handleInput} />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={this.handleInput} />
          </div>
          <button type='submit' className='btn' onClick={this.handleLogin}>Login</button>
        </form>
      </nav>
    )
  }
}

export default Navbar
