//this is our main component for the upload form
import { Row, Col } from "react-bootstrap";
import "./uploadForm.css";
import VideoUpload from "./videoUpload/videoUpload";
import ImageUpload from "./imageUpload/imageUpload";
import TextUpload from "./textUpload/textUpload";
//import the location input component
import AudioUpload from "./audioUpload/audioUpload";
import StoryUpload from "./StoryUpload/StoryUpload";
import DatePickerComponent from "./datePicker/datePickerForm";
import LocationInput from "./locationInput/locationInput";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";

function UploadForm() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="user-upload-outer">
        <h1>Share your story with the world</h1>
        <div className="user-upload-container">
          <Row className="title-row">
            <div className="input-container">
              <label>Story Title:</label>
              <input
                type="text"
                placeholder="Growing up in Birmingham in the 40's"
              />
            </div>
          </Row>
          <Row className="description-row">
            <div className="input-container">
              <label>Story Description:</label>

              <TextUpload />
            </div>
          </Row>
          <Row className="location-row">
            <div className="input-container">
              <label>Story Location:</label>
              <LocationInput />
            </div>
          </Row>
          <Row className="date-row">
            <div className="input-container">
              <label>Story date</label>
              <DatePickerComponent />
            </div>
          </Row>
          <h4>Upload at least one of the following</h4>
          <Row className="story-text-row">
            <div className="input-container">
              <label>Write your story:</label>
              <StoryUpload />
            </div>
          </Row>
          <Row className="video-row">
            <div className="input-container">
              <label>Upload Video</label>
              <VideoUpload />
              <label>Video description</label>
              <input type="text" placeholder="Grandad as a child..." />
            </div>
          </Row>
          <Row className="image-row">
            <div className="input-container">
              <label>Upload Image</label>
              <ImageUpload />
              <label>Image description</label>
              <input type="text" placeholder="Grandad as a young man..." />
            </div>
          </Row>
          <Row className="audio-row">
            <div className="input-container">
              <label>Upload Audio:</label>
              <AudioUpload />
              <label>Audio description</label>
              <input type="text" placeholder="Grandad talking about his..." />
            </div>
          </Row>
          <Row className="btn-row">
            <div className="input-container">
              <button className="draft-btn">Save Draft</button>
              <button className="preview-btn">Preview</button>
              <button className="upload-btn">Upload</button>
            </div>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UploadForm;
