const initialFetch = {
  isFetching: false,
  receivedAt: false,
  receivedDataSuccessfully: false
}

export default (state = {}, action) => {
  switch (action.type) {
    case '@@summon/IS_FETCHING':
      return Object.assign({}, state, {
        [action.typeKey]: Object.assign({}, initialFetch, state[action.typeKey], {
          isFetching: action.isFetching
        })
      })
    case '@@summon/RECEIVED_DATA':
      return Object.assign({}, state, {
        [action.typeKey]: Object.assign({}, initialFetch, state[action.typeKey], {
          receivedAt: Date.now(),
          receivedDataSuccessfully: action.receivedDataSuccessfully
        })
      })

    default:
      return state
  }
}
