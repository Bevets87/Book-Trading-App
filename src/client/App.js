/*eslint-disable*/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import GlobalStyles from './styles/global'

import HeaderContainer from './containers/Header'
import LandingPage from './pages/Landing'

import SignInPage from './pages/SignIn'
import SignUpPage from './pages/SignUp'
import AccountRouter from './Account'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return(
      <div>
        <GlobalStyles />
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={LandingPage} />
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

