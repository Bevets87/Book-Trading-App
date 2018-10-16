import React, { Component } from 'react'
import { bool, object, func } from 'prop-types'
import { connect } from 'react-redux'

import authActions from '../redux/actions/auth'

const withAuth = ({ Auth, Unauth }) => {
  class AuthContainer extends Component {
    render() {
      return this.props.authenticated ? <Auth {...this.props} /> : <Unauth {...this.props} />
    }
  }
  AuthContainer.propTypes = {
    authenticated: bool,
    error: object,
    getMe: func  
  }
   const mapStateToProps = (state) => ({
     authenticated: state.auth.authenticated,
     error: state.auth.error
   })

   const mapDispatchToProps = (dispatch) => ({
     clearError: () => dispatch(authActions.creators.clearError()),
     signInUser: (data) => dispatch(authActions.async.signInUser(data)),
     signUpUser: (data) => dispatch(authActions.async.signUpUser(data)),
     signOutUser: () => dispatch(authActions.async.signOutUser()),
     getMe: () => dispatch(authActions.async.getMe())
   })

  return connect(mapStateToProps, mapDispatchToProps)(AuthContainer) 
}

export default withAuth