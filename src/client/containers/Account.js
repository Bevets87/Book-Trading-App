import React, { Component } from 'react'
import { object, array } from 'prop-types'
import { Switch } from 'react-router-dom'
import withAuth from '../hocs/withAuth'

import RedirectToLanding from '../components/RedirectToLanding'
import DropDownMenu from '../components/DropDownMenu'

import {
  OuterContainer,
  InnerContainer,
  DesktopMenu,
  DesktopMenuItem,
  DesktopMenuAvatar,
  UserIcon,
  EditIcon,
  SearchIcon,
  BookIcon,
  LockIcon,
  IncomingIcon,
  OutgoingIcon,
  PageContainer,
  Span

} from '../styles/components/Account'


class Account extends Component {
  renderTabletMenu = () => {
    const { history, match } = this.props
    return(
      <DropDownMenu 
        history={history}
        items={[
          { _id: '1', Icon: EditIcon, title: 'Edit profile', path: `${ match.url }` },
          { _id: '2', Icon: SearchIcon, title: 'Find books', path: `${match.url}/search` },
          { _id: '3', Icon: BookIcon, title: 'My books', path: `${match.url}/books` },
          { _id: '4', Icon: IncomingIcon, title: 'Incoming trades', path: `${match.url}/incoming-trades` },
          { _id: '5', Icon: OutgoingIcon, title: 'Outgoing trades', path: `${match.url}/outgoing-trades` },
          { _id: '6', Icon: LockIcon, title: 'Change password', path: `${match.url}/change-password` },
        ]}
      />
    )  
  }
  renderDesktopMenu = () => {
    const { match, history } = this.props
    return (
      <DesktopMenu>
        <DesktopMenuAvatar>
          <UserIcon />
        </DesktopMenuAvatar>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}`) }}>
          <EditIcon /> <Span>Edit profile</Span>
        </DesktopMenuItem>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}/search`) }}>
          <SearchIcon /> <Span>Find books</Span>
        </DesktopMenuItem>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}/books`) }}>
          <BookIcon /> <Span>My books</Span>
        </DesktopMenuItem>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}/incoming-trades`) }}>
          <IncomingIcon /> <Span>Incoming trades</Span>
        </DesktopMenuItem>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}/outgoing-trades`) }}>
          <OutgoingIcon /> <Span>Outgoing trades</Span>
        </DesktopMenuItem>
        <DesktopMenuItem onClick={() => { history.push(`${match.url}/change-password`) }}>
          <LockIcon /> <Span>Change password</Span>
        </DesktopMenuItem>


      </DesktopMenu>
    )
  }
  render() {
    return (
      <OuterContainer>
        <InnerContainer>
          {this.renderDesktopMenu()}
          {this.renderTabletMenu()}
          <PageContainer>
            <Switch>
              {this.props.children}
            </Switch>
          </PageContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

Account.propTypes = {
  match: object,
  history: object,
  children: array 
}

export default withAuth({
  Auth: Account,
  Unauth: RedirectToLanding
})