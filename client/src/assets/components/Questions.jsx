import React, {useState} from 'react'

const Questions = ({numOfImages}) => {
  const [imageInQuestion, setImageInQuestion] = useState(1)
  const [requestInfo, setRequestInfo] = useState("timestamp")
  
  function handleSubmit(event) {
    event.preventDefault()
    const formData = {
      imageInQuestion: imageInQuestion,
      requestInfo: requestInfo,
    }
    fetch ("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(formData),
      })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageInQuestion">In Image #</label>
        <input 
          type="number" 
          id="imageInQuestion"
          name="imageInQuestion"
          min="1"
          max={numOfImages}
          onChange={(e)=>setImageInQuestion(e.target.value)}
          value={imageInQuestion} 
        />
        <label htmlFor='requestInfo'> what is the </label>
        <select 
          id="requestInfo" 
          name="requestInfo"
          onChange={(e)=>setRequestInfo(e.target.value)}
          value={requestInfo}
        >
          <option value="timestamp">Time Stamp</option>
          <option value="latitude">Latitude</option>
          <option value="longitude">Longitude</option>
          <option value="altitude_m">Altitude(m)</option>
          <option value="heading_deg">Heading degree</option>
          <option value="file_name">File Name</option>
          <option value="camera_tilt_deg">Camera tilt degree</option>
          <option value="focal_length_mm">Focal length(mm)</option>
          <option value="iso">Iso</option>
          <option value="shutter_speed">Shutter Speed</option>
          <option value="aperture">Aperture</option>
          <option value="color_temp_k">Color Temp</option>
          <option value="image_format">Image Format</option>
          <option value="file_size_mb">File Size(mb)</option>
          <option value="drone_speed_mps">Drone Speed(mps)</option>
          <option value="battery_level_pct">Battery Level(%)</option>
          <option value="gps_accuracy_m">GPS accuracy(m)</option>
          <option value="gimbal_mode">Gimbal mode</option>
          <option value="subject_detection">Subject dectection</option>
          <option value="iamge_tags">Image Tags</option>
        </select>
        <label>? </label>
        <button type='submit'>Ask</button>
      </form>
    </div>
  )
}

export default Questions
