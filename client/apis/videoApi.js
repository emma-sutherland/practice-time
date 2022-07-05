import request from 'superagent'

export function getVideos() {
  return request
    .get('/api/v1/videos')
    .then((res) => {
      return res.body
    })
}



