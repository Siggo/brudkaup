import { combineReducers } from 'redux'
import fetch from './fetchReducer'
import misc from './miscReducer'

const rootReducer = combineReducers({
  fetch,
  misc
})

export default rootReducer
