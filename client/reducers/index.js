import { combineReducers } from 'redux'

// import stuff from './stuff'

import videoReducer from './videoReducer'
import waiting from './waiting'
import errorMessage from './errorMessage'

const reducer = combineReducers({
  videos: videoReducer,
  error: errorMessage,
  waiting: waiting
})

export default reducer



