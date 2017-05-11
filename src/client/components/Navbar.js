import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { userLoginRequest, setUser, setErrors } from '../actions/userActions'

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
  isValid () {
    const { errors, isValid } = validateLoginInput(this.state)

    if (!isValid) {
      this.setState({
        clientErrors: errors
      })
    }

    return isValid
  }
  handleLogin (event) {
    event.preventDefault()
    this.setState({
      clientErrors: {}
    })
    if (this.isValid()) {
      userLoginRequest(this.state)
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
    const { clientErrors } = this.state

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

Navbar.propTypes = {
  history: PropTypes.object,
  serverErrors: PropTypes.object,
  dispatch: PropTypes.func,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => {
  const { isAuthenticated, serverErrors } = state.userReducer

  return {
    isAuthenticated,
    serverErrors
  }
}

export default connect(mapStateToProps)(Navbar)
