import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

// import { getVideos } from '../apis/videoApi'
import { fetchVideos } from '../actions';


function App() {
  const videos = useSelector((state) => state.videos)
  console.log(videos)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   reRender()
  // }, [])

  const reRender = (e) => {
    e.preventDefault()
    dispatch(fetchVideos(videos))
  }
  
  return (

    <div>
      <h1>Practice videos</h1>
      <button onClick={reRender}>
      Create practice programme
      </button>

      {videos?.map(video => (
            <div key={video.id}>
             <p>{video.title}</p>
             {/* <a href="link">{video.video_link}</a> */}
            </div>
        ))}

    </div>
  )
}

      
export default App


  // const [videos, setVideos] = useState([]) 