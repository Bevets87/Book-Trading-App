import React from 'react'
import withAuth from '../hocs/withAuth'

import { Helmet } from 'react-helmet'
import LandingPage from '../pages/Landing'
import UnownedBooksPage from '../pages/UnownedBooks'

const Home = withAuth({ Auth: UnownedBooksPage, Unauth: LandingPage })

class HomeContainer extends React.Component {
  renderHead() {
    return (
      <Helmet>
        <title>Booktrader</title>
        <meta property="og:title" content="Booktrader" />
      </Helmet>
    )
  }
  renderBody() {
    return <Home {...this.props} />
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

export default HomeContainer 