import universal from 'react-universal-component'
import Spinner from './components/Spinner'

const pages = {
  Landing: () => import('./containers/Landing'),
  SignIn: () => import('./containers/SignIn'),
  SignUp: () => import('./containers/SignUp'),
  EditProfile: () => import('./containers/EditProfile'),
  ChangePassword: () => import('./containers/ChangePassword'),
  SearchBooks: () => import('./containers/SearchBooks'),
  OwnedBooks: () => import('./containers/OwnedBooks'),
  IncomingTrades: () => import('./containers/IncomingTrades'),
  OutgoingTrades: () => import('./containers/OutgoingTrades')
}


const determineHowToLoad = ({ page }) => pages[page]()

const UniversalComponent = universal(determineHowToLoad, {
  minDelay: 500,
  loading: Spinner,
  error: null
})

export default UniversalComponent