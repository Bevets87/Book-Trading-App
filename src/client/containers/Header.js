import UnauthHeader from '../components/UnauthHeader'
import AuthHeader from '../components/AuthHeader'
import { withRouter } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import withObservable from '../hocs/withObservable'
import { compose } from 'redux'

const HeaderWithAuthModes = withAuth({ Auth: AuthHeader, Unauth: UnauthHeader })

export default compose(withObservable, withRouter)(HeaderWithAuthModes)