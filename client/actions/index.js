import request from 'superagent'
import { getVideos } from '../apis/videoApi'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS'
export const REQUEST_VIDEOS = 'REQUEST_VIDEOS'

export function requestVideos() {
  return {
    type: REQUEST_VIDEOS,
  }
}

export function receiveVideos(videos) {
  return {
    type: RECEIVE_VIDEOS,
    payload: videos,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchVideos() {
  return (dispatch) => {
    getVideos () // from API
      .then((videoArr) => {
        console.log(videoArr)
        dispatch(receiveVideos(videoArr))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}