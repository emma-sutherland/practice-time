
import React, { useState, useEffect } from 'react'
// import { once } from 'superagent'
import { getVideos } from '../apis/videoApi'


function App() {

  const [videos, setVideos] = useState([]) 

  // useEffect does once, on load

  useEffect(() => {
    return getVideos()
    .then(videos => {
      setVideos(videos)
    })
  }, [])
  


  return (
    <div>
      <h1>Practice videos</h1>

      {videos.map(video => {
          return (
            <>
             <p key={video.id}>{video.title}</p>
            </>
          )
        })
      }

    </div>
  )
}

      
export default App



