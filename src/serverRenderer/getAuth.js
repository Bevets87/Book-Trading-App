import authActions from '../client/redux/actions/auth'

export default async (store) => {
  return await store.dispatch(authActions.async.getMe())
}