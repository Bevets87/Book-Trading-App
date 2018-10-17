import React from 'react'
import withAuth from '../hocs/withAuth'
import withDynamicImport from '../hocs/withDynamicImport'

import { Helmet } from 'react-helmet'
import Landing from '../components/Landing'
import Spinner from '../components/Spinner'

const LandingWithModes = withAuth({
  Auth: withDynamicImport(() => import('./UnownedBooks'), { Loading: Spinner }),
  Unauth: Landing 
})



class LandingContainer extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Booktrader</title>
        <meta property="og:title" content="Booktrader" />
      </Helmet>
    )
  }
  renderBody() {
    return <LandingWithModes {...this.props} />
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

export default LandingContainer 