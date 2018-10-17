import React from 'react'
import universal from 'react-universal-component'
import { string } from 'prop-types'
import NotFound from './components/NotFound'

const pages = {
  Landing: universal(() => import('./containers/Landing')),
  UnownedBooks: universal(() => import('./containers/UnownedBooks')),
  SignIn: universal(() => import('./containers/SignIn')),
  SignUp: universal(() => import('./containers/SignUp')),
  EditProfile: universal(() => import('./containers/EditProfile')),
  ChangePassword: universal(() => import('./containers/ChangePassword')),
  SearchBooks: universal(() => import('./containers/SearchBooks')),
  OwnedBooks: universal(() => import('./containers/OwnedBooks')),
  IncomingTrades: universal(() => import('./containers/IncomingTrades')),
  OutgoingTrades: universal(() => import('./containers/OutgoingTrades')),
  Account: universal(() => import('./containers/Account')),
  TradeRequest: universal(() => import('./containers/TradeRequest')),
  NotFound
}

const UniversalComponent = (props) => {
  const Page = pages[props.page] || NotFound
  return <Page  {...props} />
}

UniversalComponent.propTypes = {
  page: string
}

export default UniversalComponent