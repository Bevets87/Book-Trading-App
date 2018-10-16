import React from 'react'
import { bool } from 'prop-types'
import withAuth from '../hocs/withAuth'
import { connect } from 'react-redux'
import messageActions from '../redux/actions/message'

import { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import ChangePassword from '../components/ChangePassword'
import RedirectToLanding from '../components/RedirectToLanding'
import { PulsatingLock, Container } from '../styles/components/Loading'

export const Loading = () => <Container><PulsatingLock /></Container>

const mapStateToProps = (state) => ({
  response: state.messages.response,
  error: state.messages.error,
  isLoading: state.messages.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  changePassword: (passwordInfo) => dispatch(messageActions.async.changePassword(passwordInfo)),
  clearResponse: () => dispatch(messageActions.creators.clearResponse()),
  clearError: () => dispatch(messageActions.creators.clearError()) 
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

class ChangePasswordContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>Change password</title>
        <meta property="og:title" content="Change password"/>
      </Helmet>
    )
  }
  renderBody() {
    return (
      <AccountHeader title={'Change your password'}>
        {this.props.isLoading ? <Loading /> : <ChangePassword {...this.props} />}
      </AccountHeader>
    )
  }
  render() {
    return(
      <div>
        {this.renderHead()}
        {this.renderBody()}
      </div>
    )
  }
  
}

ChangePasswordContainer.propTypes = {
  isLoading: bool 
}

export default withAuth({
  Auth: withConnect(ChangePasswordContainer),
  Unauth: RedirectToLanding
})
