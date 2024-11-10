import React from 'react'
import DroneCard from './DroneCard'

const DroneCards = ({images}) => {
  return (
    <div className='cardsContainer'>
      {images.map((image) => (
        <DroneCard key={image.id} image={image}/>
      ))}
    </div>
  )
}

export default DroneCards
