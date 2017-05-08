import React, { Component } from 'react'

import Navbar from './Navbar'

import './Main.scss'

class Main extends Component {
  constructor (props) {
    super (props)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: null
    }
    this.handleRegister = this.handleRegister.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }
  handleRegister (event) {
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
    case 'pwd-confirmation':
      this.setState({
        passwordConfirmation: event.target.value
      })
      break
    }
  }
  render () {
    return (
      <div>
        <Navbar />
        <main>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='col-sm-12 about-container'>
                  <h1>Features</h1>
                  <ul>
                    <li>Catalogue your books online</li>
                    <li>See all of the books our users own</li>
                    <li>Request to borrow other users' books</li>
                    <li>Easily manage books and requests from your dashboard</li>
                  </ul>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='col-sm-12 register-container'>
                  <form>
                    <h1>Register A New Account</h1>
                    <div className='form-group'>
                      <input placeholder='Email' type='email' className='form-control' id='email' onChange={this.handleInput} />
                    </div>
                    <div className='form-group'>
                      <input placeholder='Password' type='password' className='form-control' id='pwd' onChange={this.handleInput} />
                    </div>
                    <div className='form-group'>
                      <input placeholder='Password Confirmation' type='password' className='form-control' id='pwd-confirmation' onChange={this.handleInput} />
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={this.handleRegister}>Register</button>
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

export default Main
