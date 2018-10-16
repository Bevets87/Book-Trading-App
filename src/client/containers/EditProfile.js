import React from 'react'
import { object, func } from 'prop-types'
import withAuth from '../hocs/withAuth'
import withFetch from '../hocs/withFetch'
import { connect } from 'react-redux'
import { compose } from 'redux'
import indexActions from '../redux/actions'
import userActions from '../redux/actions/user'

import  { Helmet } from 'react-helmet'
import AccountHeader from '../components/AccountHeader'
import EditProfile from '../components/EditProfile'
import RedirectToLanding from '../components/RedirectToLanding'
import Warning from '../components/Warning'
import { PulsatingEdit, Container } from '../styles/components/Loading'

export const Loading = () => <Container><PulsatingEdit /></Container>

export const Failure = ({ error, reset }) => <Warning error={error} reset={reset} />
Failure.propTypes = {
  error: object,
  reset: func 
}

export const Success = ({ response, updateUserInfo }) => <EditProfile userInfo={response} updateUserInfo={updateUserInfo} />
Success.propTypes = {
  response: object,
  updateUserInfo: func 
}

const mapStateToProps = (state) => ({
  response: state.user.response,
  error: state.user.error,
  isLoading: state.user.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(userActions.async.getMe()),
  reset: () => dispatch(indexActions.creators.resetStore()),
  updateUserInfo: (data) => dispatch(userActions.async.updateMe(data))
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const ConnectedEditProfile = compose(withConnect, withFetch)({ Success, Loading, Failure })

class EditProfileContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>Edit profile</title>
        <meta property="og:title" content="Edit profile" />
      </Helmet>
    )
  }
  renderBody() {
    return(
      <AccountHeader title={'Edit your profile'}>
        <ConnectedEditProfile  {...this.props} />
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


export default withAuth({
  Auth: EditProfileContainer,
  Unauth: RedirectToLanding 
})



