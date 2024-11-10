import React from 'react'

const Answer = ({response}) => {
  console.log(response)
  const filteredKeys = Object.keys(response).filter(key => key !== "id")
  const requestKey = filteredKeys[0]

  return (
    <div className='answer'>
      <p><span style={{fontWeight:"bold"}}>Here is your answer.</span></p>
      <p>The image #{response.id} {requestKey} is {response[requestKey]}.</p>
    </div>
  )
}

export default Answer
