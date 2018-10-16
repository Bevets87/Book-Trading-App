/*eslint-disable*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import GlobalStyles from './styles/global'

import HeaderContainer from './containers/Header'
import HomeContainer from './containers/Home'
import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import AccountPage from './pages/Account'
import EditProfilePage from './pages/EditProfile'
import SearchBooksPage from './pages/SearchBooks'
import OwnedBooksPage from './pages/OwnedBooks'
import IncomingTradesPage from './pages/IncomingTrades'
import OutgoingTradesPage from './pages/OutgoingTrades'
import ChangePasswordPage from './pages/ChangePassword'
import NotFound from './components/NotFound'

const AccountRouter = (props) => {
  const { match } = props
  return(
    <AccountPage {...props}>
      <Route exact path={`${match.url}`} component={EditProfilePage} />
      <Route exact path={`${match.url}/search`} component={SearchBooksPage} />
      <Route exact path={`${match.url}/books`} component={OwnedBooksPage} />
      <Route exact path={`${match.url}/incoming-trades`} component={IncomingTradesPage} />
      <Route exact path={`${match.url}/outgoing-trades`} component={OutgoingTradesPage} />
      <Route exact path={`${match.url}/change-password`} component={ChangePasswordPage} />
    </AccountPage>
  )
}

class App extends Component {
  render() {
    return(
      <div>
        <GlobalStyles />
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/signin' component={SignInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route path='/account' component={AccountRouter} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)

