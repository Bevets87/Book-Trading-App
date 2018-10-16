import React from 'react'
import withAuth from '../hocs/withAuth'

import { Helmet } from 'react-helmet'
import SignIn from '../components/SignIn'
import RedirectToLanding from '../components/RedirectToLanding'

class SignInContainer extends React.Component {
  renderHead() {
    return(
      <Helmet>
        <title>Sign in</title>
        <meta property="og:title" content="Sign in" />
      </Helmet>
    )
  }
  renderBody() {
    return <SignIn {...this.props} />
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

export default withAuth({ Auth: RedirectToLanding, Unauth: SignInContainer })




