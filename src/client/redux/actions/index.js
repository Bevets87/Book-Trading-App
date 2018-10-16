export const types = {
  RESET_STORE: 'reset_store'
}

export const creators = {
  resetStore: () => ({
    type: types.RESET_STORE
  })
}

export default {
  types,
  creators
}