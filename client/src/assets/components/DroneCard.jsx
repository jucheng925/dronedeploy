import React from 'react'

const DroneCard = ({image}) => {


  return (
    <div className="card">
      {Object.keys(image).map(key => (
        <p key={key}>{key}: {image[key]}</p>
      ))}
    </div>
  )
}

export default DroneCard
