import React, { Component } from 'react'
import { func, object } from 'prop-types'

import {
  Nav,
  TabletMenu,
  TabletMenuItem,
  BookIconContainer,
  BookIconTitle,
  RedBookIcon,
  SettingsIconContainer,
  SettingsIcon,
} from '../styles/components/Header'

import PhoneMenu from './PhoneMenu'

class AuthHeader extends Component {
  state = { PhoneMenu: { mounted: false } }
  renderSettingsIcon = () => {
    return (
      <SettingsIconContainer onClick={this.mountMenu}>
        <SettingsIcon />
      </SettingsIconContainer>
    )
  }
  renderLogo = () => {
    return (
      <BookIconContainer onClick={this.navigateToLandingPage}>
        <RedBookIcon />
        <BookIconTitle>Booktrader</BookIconTitle>
      </BookIconContainer>
    )
  }
  renderPhoneMenu = () => {
    return (
      <PhoneMenu
        unmount={this.unmountMenu}
        subscribe={this.props.subscribe}
        unsubscribe={this.props.unsubscribe}
        signOutUser={this.props.signOutUser}
        navigateToAccountPage={this.navigateToAccountPage}
        navigateToLandingPage={this.navigateToLandingPage}
      />
    )
  }
  mountMenu = () => {
    this.setState({ PhoneMenu: { mounted: true } }, () => {
      this.props.notify('mount')
    })
  }
  unmountMenu= (cb = null) => {
    this.props.notify('unmount', () => { 
      this.setState({ PhoneMenu: { mounted: false } }, () => {
        if (cb) {
          cb()
        }
      })
    })
  }
  withNoNavToSamePage = (path) => {
    const { history } = this.props
    return () => {
      if (history.location.pathname !== path) {
        history.push(path)
      }
    }
  }
  navigateToLandingPage = () => {
   const navToLanding = () => { this.withNoNavToSamePage('/')() }
   if (this.state.PhoneMenu.mounted) {
     this.unmountMenu(navToLanding)
   } else {
     navToLanding()
   }
  }
  navigateToAccountPage = () => {
    const navToAccount = () => { this.props.history.push('/account') }
    if (this.state.PhoneMenu.mounted) {
      this.unmountMenu(navToAccount)
    } else {
      navToAccount()
    }
  }
  async handleSignOutUser () {
    await this.props.signOutUser()
    this.props.history.push('/')
  }
  render() {
    return (
      <Nav>
        {this.renderLogo()}

        {this.renderSettingsIcon()}

        <TabletMenu>
          <TabletMenuItem
            onClick={this.navigateToAccountPage}
          >
            Account
          </TabletMenuItem>

          <TabletMenuItem
            onClick={ async () => { await this.handleSignOutUser() } }
          >
            Logout
          </TabletMenuItem>
        </TabletMenu>

        {this.state.PhoneMenu.mounted ? this.renderPhoneMenu() : null}
      </Nav>
    )
  }
}

AuthHeader.propTypes = {
  history: object,
  signOutUser: func,
  subscribe: func,
  unsubscribe: func,
  notify: func
}

export default AuthHeader 