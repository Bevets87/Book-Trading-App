import React, { Component } from 'react'
import { func } from 'prop-types'

import {
  PhoneMenuContainer,
  PhoneMenuHeader,
  PhoneMenuHeaderItem,
  PhoneMenuItem,
  LineBreak,
  CloseIcon,
  PhoneMenuTitle,
  RedBookIcon 
} from '../styles/components/Header'

import {
  fadeInFromSide,
  fadeInStaggered,
  animationSequence,
  fadeOutToSide,
  fadeOutStaggered
} from '../styles/animations'

class PhoneMenu extends Component {
  enterAnimation = () => {
    const phoneMenu = this.phoneMenu
    
    animationSequence()
      .add(fadeInFromSide(phoneMenu), 0.1)
      .add(fadeInStaggered(phoneMenu.children))
  }
  exitAnimation = (done) => {
    const phoneMenu = this.phoneMenu
    animationSequence({ onComplete: done })
      .add(fadeOutStaggered(phoneMenu.children), 0.1)
      .add(fadeOutToSide(phoneMenu))
  }
  componentDidMount() {
    this.props.subscribe('mount', this.enterAnimation)
    this.props.subscribe('unmount', this.exitAnimation)
  }
  componentWillUnmount() {
    this.props.unsubscribe('mount')
    this.props.unsubscribe('unmount')
  }
  render() {
    const { navigateToLandingPage, navigateToAccountPage, unmount, signOutUser } = this.props
    return (
      <PhoneMenuContainer ref={(target) => { this.phoneMenu = target }}>
        <PhoneMenuHeader>
          <PhoneMenuHeaderItem onClick={() => { unmount() }}><CloseIcon /></PhoneMenuHeaderItem>
        </PhoneMenuHeader>

        <PhoneMenuTitle onClick={navigateToLandingPage}><RedBookIcon />Booktrader</PhoneMenuTitle>
        <LineBreak />

        <PhoneMenuItem onClick={navigateToAccountPage}>Account</PhoneMenuItem>

        <PhoneMenuItem onClick={signOutUser}>Logout</PhoneMenuItem>
      </PhoneMenuContainer>
    )
  }
}

PhoneMenu.propTypes = {
  navigateToAccountPage: func,
  navigateToLandingPage: func,
  signOutUser: func,
  unmount: func,
  subscribe: func,
  unsubscribe: func
}

export default PhoneMenu 