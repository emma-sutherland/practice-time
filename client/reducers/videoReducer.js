import { RECEIVE_VIDEOS } from '../actions'

const initialState = []

const videoReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_VIDEOS:
      return payload

    default:
      return state
  }
}

export default videoReducer

