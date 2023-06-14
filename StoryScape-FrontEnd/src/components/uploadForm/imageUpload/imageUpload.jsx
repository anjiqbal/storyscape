import React from 'react'

function ImageUpload() {
  return (
    <div>
    <div className="file-drop-area">

    <span className="choose-file-button">Choose Files</span>
    <span className="file-message">or drag and drop files here</span>
    <input type="file" className="file-input" accept=".jfif,.jpg,.jpeg,.png,.gif" multiple />
    


</div>
</div>
  )
}

export default ImageUpload