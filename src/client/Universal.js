import universal from 'react-universal-component'
import NotFound from './components/NotFound'
import Spinner from './components/Spinner'

const pages = {
  Landing: () => import('./containers/Landing'),
  UnownedBooks: () => import('./containers/UnownedBooks'),
  SignIn: () => import('./containers/SignIn'),
  SignUp: () => import('./containers/SignUp'),
  EditProfile: () => import('./containers/EditProfile'),
  ChangePassword: () => import('./containers/ChangePassword'),
  SearchBooks: () => import('./containers/SearchBooks'),
  OwnedBooks: () => import('./containers/OwnedBooks'),
  IncomingTrades: () => import('./containers/IncomingTrades'),
  OutgoingTrades: () => import('./containers/OutgoingTrades'),
  TradeRequest: () => import('./containers/TradeRequest')
}


const determineHowToLoad = ({ page }) => pages[page]()

const UniversalComponent = universal(determineHowToLoad, {
  minDelay: 300,
  loading: Spinner,
  error: NotFound 
})

export default UniversalComponent