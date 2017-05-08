import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './Navbar.scss'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: null,
      dropDownMenu: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleDropDownMenu = this.handleDropDownMenu.bind(this)
  }
  handleDropDownMenu (event) {
    event.preventDefault()
    let dropDownMenu = this.state.dropDownMenu ? false : true
    this.setState({
      dropDownMenu: dropDownMenu
    })
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
        <Link to='/'>
          <div className='nav-logo-container'>
            <span className='glyphicon glyphicon-book'></span>
            <h2>BookTrader</h2>
          </div>
        </Link>
        <form className='form-inline'>
          <div className='form-group'>
            <input type='email' className='form-control' id='email' placeholder='Email' onChange={this.handleInput} />
          </div>
          <div className='form-group'>
            <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={this.handleInput} />
          </div>
          <button type='submit' className='btn' onClick={this.handleLogin}>Login</button>
        </form>
        <div className='hamburger-container' onClick={this.handleDropDownMenu}>
          <span className='glyphicon glyphicon-menu-hamburger'></span>
        </div>
        {this.state.dropDownMenu && <div className='drop-down-menu'><Link to='/'><h2>About</h2></Link><Link to='/login'><h2>Login</h2></Link><Link to='/register'><h2>Register</h2></Link></div>}
      </nav>
    )
  }
}

export default Navbar
