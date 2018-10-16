import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { object, string } from 'prop-types'

class RedirectToLanding extends Component {
  render() {
    const { staticContext = {} } = this.props
    staticContext.redirect = true
    return <Redirect to='/' />
  }
}

RedirectToLanding.propTypes = {
  staticContext: object,
  path: string 
} 

export default RedirectToLanding  