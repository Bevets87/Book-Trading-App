import React, { Component } from 'react'
import { object } from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import withAuth from './hocs/withAuth'

import EditProfilePage from './pages/EditProfile'
import SearchBooksPage from './pages/SearchBooks'
import OwnedBooksPage from './pages/OwnedBooks'
import IncomingTradesPage from './pages/IncomingTrades'
import OutgoingTradesPage from './pages/OutgoingTrades'
import ChangePasswordPage from './pages/ChangePassword'

import NotFound from './components/NotFound'
import RedirectToLanding from './components/RedirectToLanding'
import DropDownMenu from './components/DropDownMenu'

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

} from './styles/components/Account'


class Account extends Component {
  renderTabletMenu = () => {
    const { history, match } = this.props
    return (
      <DropDownMenu
        history={history}
        items={[
          { _id: '1', Icon: EditIcon, title: 'Edit profile', path: `${match.url}` },
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
    const { match } = this.props
    return (
      <OuterContainer>
        <InnerContainer>
          {this.renderDesktopMenu()}
          {this.renderTabletMenu()}
          <PageContainer>
            <Switch>
              <Route exact path={`${match.url}`} component={EditProfilePage} />
              <Route exact path={`${match.url}/search`} component={SearchBooksPage} />
              <Route exact path={`${match.url}/books`} component={OwnedBooksPage} />
              <Route exact path={`${match.url}/incoming-trades`} component={IncomingTradesPage} />
              <Route exact path={`${match.url}/outgoing-trades`} component={OutgoingTradesPage} />
              <Route exact path={`${match.url}/change-password`} component={ChangePasswordPage} />
              <Route component={NotFound} />
            </Switch>
          </PageContainer>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

Account.propTypes = {
  match: object,
  history: object
}

export default withAuth({
  Auth: Account,
  Unauth: RedirectToLanding
})