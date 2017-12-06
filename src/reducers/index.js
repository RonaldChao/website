import { combineReducers } from 'redux'
import hello from './hello'
import jsonAPI from './jsonAPI'
import cin from './cin'

const reducer = combineReducers({
  jsonAPI,
  hello,
  cin
})

export default reducer
