import pngjs from 'png-js';
import { useState } from 'react';
import "./imageUpload.css"

function ImageUpload() {

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const convertedFiles = [];

    for (const file of files) {
      // Convert the file to PNG using png-js
      const arrayBuffer = await file.arrayBuffer();
      const png = new pngjs(arrayBuffer);

      const pixels = png.decodePixels();
      const pngImage = new pngjs(png.width, png.height);
      pngImage.data = pixels;

      // Convert PNG to base64 data URL
      const base64DataURL = pngImage.toDataURL();

      // Upload the file to Supabase Storage
      const { data, error } = await supabase.storage
        .from('stories')
        .upload(`file_${Date.now()}.png`, pngImage.dataURL);

      if (error) {
        console.error('Error uploading file:', error.message);
      } else {
        // Store the file URL in your database
        convertedFiles.push(data.Key);
      }
    }

    // Update the selected files state
    setSelectedFiles(convertedFiles);
  };
  return (
    <div>
    <div className="file-drop-area">

    <span className="choose-file-button">Choose Files</span>
    <span className="file-message">&nbsp; or drag and drop your image files here:</span>
    <input type="file" accept=".jfif,.jpg,.jpeg,.png,.gif" onChange={(event) => {
                    handleFileChange(event.target.value);
                  }}
/>
    
</div>
</div>
  )
}

export default ImageUpload