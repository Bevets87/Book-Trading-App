import React from 'react'
import withAuth from '../hocs/withAuth'

import { Helmet } from 'react-helmet'
import SignUp from '../components/SignUp'
import RedirectToLanding from '../components/RedirectToLanding'

class SignUpContainer extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Sign up</title>
        <meta property="og:title" content="Sign up" />
      </Helmet>
    )
  }
  renderBody() {
    return <SignUp {...this.props}/>
  }
  render() {
    return (
      <div>
        {this.renderHead()}
        {this.renderBody()}
      </div>
    )
  }
}

export default withAuth({ Auth: RedirectToLanding, Unauth: SignUpContainer })




