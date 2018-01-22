/* global fetch */

const summonActions = {
  isFetching: (isFetching, typeKey) => {
    return {
      type: '@@summon/IS_FETCHING',
      typeKey,
      isFetching
    }
  },
  receivedData: (receivedDataSuccessfully, typeKey) => {
    return {
      type: '@@summon/RECEIVED_DATA',
      typeKey,
      receivedDataSuccessfully
    }
  }
}

export const summon = (payload) => {
  // TODO: handle mandatory variables with errors
  const {
    type,
    url,
    method = 'POST',
    data,
    action
  } = payload

  const externalCall = /^http/.test(url.toLowerCase())

  let options = externalCall ? {
      method,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  } : {
          method,
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      }

  if (data) {
      options.body = JSON.stringify(data)
  }

  return (dispatch, getState) => {
    dispatch(summonActions.isFetching(true, type))
    return fetch(url, options).then(response => {
      dispatch(summonActions.isFetching(false, type))
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(new Error(response.json()))
      }
    }).then(data => {
      dispatch(summonActions.receivedData(true, type))
      if (type) {
        dispatch({type, data, ...action})
      }
      return data
    }).catch(data => {
      dispatch(summonActions.receivedData(false, type))
      if (type) {
        dispatch({type: `${type}_FAILED`, data, ...action})
      }
      return data
    })
  }
}
