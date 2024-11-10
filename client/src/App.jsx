import { useState, useEffect } from 'react'
import DroneCards from './assets/components/DroneCards'
import Questions from './assets/components/Questions'

function App() {
  const [images, setImages] = useState([])
  const numOfImages = images.length

  useEffect(() => {
    fetch("/api/images")
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`Http error! Status: ${resp.status}`);
      }
      return resp.json()
    })
    .then(data => setImages(data))
    .catch(error => console.error("Failed to fetch", error))
  }, [])


  return (
    <>
      <h1>Drone Images Showcase</h1>
      <DroneCards images={images}/>
      <Questions numOfImages={numOfImages}/>
    </>
  )
}

export default App
