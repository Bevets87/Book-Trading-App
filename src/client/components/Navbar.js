import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import validateLoginInput from '../../server/shared/validations/login'

import { Link } from 'react-router-dom'

import './Navbar.scss'

class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clientErrors: {
        email: '',
        password: ''
      },
      dropDownMenu: false
    }
    this.handleNavLogin = this.handleNavLogin.bind(this)
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
  isValid () {
    const { errors, isValid } = validateLoginInput(this.state)

    if (!isValid) {
      this.setState({
        clientErrors: errors
      })
    }

    return isValid
  }
  handleNavLogin (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {}
    })
    if (this.isValid()) {
      this.props.userLoginRequest(this.state)
    }
  }
  handleInput (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {
        email: '',
        password: ''
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
    }
  }
  render () {
    const { clientErrors } = this.state
    const { isAuthenticated } = this.props
    if (isAuthenticated) {
      return (
        <nav>
          <Link to='/'>
            <div className='nav-logo-container'>
              <span className='glyphicon glyphicon-book'></span>
              <h2>BookTrader</h2>
            </div>
          </Link>
          <ul className='auth-nav-menu'>
            <li>All Books</li>
            <li>My Books</li>
            <li>Manage Trades</li>
            <li>Account</li>
            <li>Logout</li>
          </ul>
          <div className='hamburger-container' onClick={this.handleDropDownMenu}>
            <span className='glyphicon glyphicon-menu-hamburger'></span>
          </div>
          {this.state.dropDownMenu && <div className='drop-down-menu'><Link to='/all-books'><h2>All Books</h2></Link><Link to='/my-books'><h2>My Books</h2></Link><Link to='/trades'><h2>Manage Trades</h2></Link><Link to='/account'><h2>Account</h2></Link><Link to='/logout'><h2>Logout</h2></Link></div>}
        </nav>
      )
    } else {
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
              {clientErrors.email && <span className='error'>{clientErrors.email}</span>}
            </div>
            <div className='form-group'>
              <input type='password' className='form-control' id='pwd' placeholder='Password' onChange={this.handleInput} />
              {clientErrors.password && <span className='error'>{clientErrors.password}</span>}
            </div>
            <button type='submit' className='btn' onClick={this.handleNavLogin}>Login</button>
          </form>
          <div className='hamburger-container' onClick={this.handleDropDownMenu}>
            <span className='glyphicon glyphicon-menu-hamburger'></span>
          </div>
          {this.state.dropDownMenu && <div className='drop-down-menu'><Link to='/'><h2>About</h2></Link><Link to='/login'><h2>Login</h2></Link><Link to='/register'><h2>Register</h2></Link></div>}
        </nav>
      )
    }
  }
}

Navbar.propTypes = {
  serverErrors: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  userLoginRequest: PropTypes.func
}

const mapStateToProps = (state) => {
  const { serverErrors, isAuthenticated } = state.userReducer
  return {
    serverErrors,
    isAuthenticated
  }
}
export default connect(mapStateToProps)(Navbar)
