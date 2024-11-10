import { useState, useEffect } from 'react'
import DroneCards from './assets/components/DroneCards'
import Questions from './assets/components/Questions'
import Answer from './assets/components/Answer'

function App() {
  const [images, setImages] = useState([])
  const [response, setResponse] = useState("")
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
      <Questions numOfImages={numOfImages} setResponse={setResponse}/>
      {response && <Answer response={response}/>}
    </>
  )
}

export default App
