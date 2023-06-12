//this is our main component for the upload form

// import React from 'react'
import './uploadForm.css'
import VideoUpload from './videoUpload/videoUpload'
import ImageUpload from './imageUpload/imageUpload'
import TextUpload from './textUpload/textUpload'
//import the location input component
import AudioUpload from './audioUpload/audioUpload'
import StoryUpload from './StoryUpload/StoryUpload'

function UploadForm() {

  return (
    <div className='user-upload-container'>
    <VideoUpload />
    <ImageUpload />
    <TextUpload />
    {/* Location - tell us where the story occurred */}
    <AudioUpload />
    <StoryUpload/>
    
    </div>
  )
}

export default UploadForm