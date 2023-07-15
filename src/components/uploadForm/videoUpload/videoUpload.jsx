
import 'bootstrap/dist/css/bootstrap.min.css';

function VideoUpload() {
  return (
    <div>
    <div className="file-drop-area">
    {/* Video Upload */}
        <span className="choose-file-button">Choose Files</span>
        <span className="file-message">or drag and drop your video files here</span>
        <input type="file" className="file-input" accept="video/*" />
            
        </div>
    </div>
  )
}

export default VideoUpload