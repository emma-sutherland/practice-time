import { SHOW_ERROR, REQUEST_VIDEOS, RECEIVE_VIDEOS } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_VIDEOS:
      return true
    case RECEIVE_VIDEOS:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting