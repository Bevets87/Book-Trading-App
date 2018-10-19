import userActions from '../client/redux/actions/user'
import ownedBooksActions from '../client/redux/actions/ownedBooks'
import unownedBooksActions from '../client/redux/actions/unownedBooks'
import incomingTradesActions from '../client/redux/actions/incomingTrades'
import outgoingTradesActions from '../client/redux/actions/outgoingTrades'

export default async (req, store) => {
  const { authenticated } = store.getState().auth
  if (authenticated) {
    if (req.path === '/') {
      return await store.dispatch(unownedBooksActions.async.getAll())
    }
    if (req.path === '/account') {
      return await store.dispatch(userActions.async.getMe())
    }
    if (req.path === '/account/books') {
      return await store.dispatch(ownedBooksActions.async.getAll())
    }
    if (req.path === '/account/incoming-trades') {
      return await store.dispatch(incomingTradesActions.async.getAll())
    }
    if (req.path === '/account/outgoing-trades') {
      return await store.dispatch(outgoingTradesActions.async.getAll())
    }
  
  }
  return Promise.resolve({ message: 'Route has no data' })
}