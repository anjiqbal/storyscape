import { Row, Col } from "react-bootstrap";
import "./uploadForm.css";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "./datePicker/datePickerForm";
import LocationInput from "./locationInput/locationInput";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";

function UploadForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [story, setStory] = useState("");
  // const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [storyObject, setStoryObject] = useState({});

  function handleTitle(input) {
    setTitle(input);
  }

  function handleStoryDescription(input) {
    setStoryDescription(input);
  }

  function handleStory(input) {
    setStory(input);
  }

  // function handleLocation(input) {
  //   setLocation(input);
  // }

  function handleDate(input) {
    setDate(input);
  }
  function handleSubmit(event) {
    event.preventDefault();

    const newStoryObject = {
      story_title: title,
      story_description: storyDescription,
      story_location: "Birmingham",
      story_date: date,
      story_main: story,
    };
    setStoryObject(newStoryObject);

    async function uploadStory() {
      const { data, error, status } = await supabase
        .from("stories")
        .insert({ ...newStoryObject })
        .select();
      // Handle the response
      console.log(data);
      console.log(error);
      console.log(status);
      if (status === 201) {
        navigate("/success");
      } else {
        alert("Story upload failed");
      }
    }

    uploadStory();
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="user-upload-outer">
        <h1>Share your story with the world</h1>
        <div className="user-upload-container">
          <form onSubmit={handleSubmit}>
            <Row className="title-row">
              <div className="input-container">
                <label>Story Title:</label>
                <input
                  type="text"
                  placeholder="Growing up in Birmingham in the 40's"
                  onChange={(event) => {
                    handleTitle(event.target.value);
                  }}
                />
              </div>
            </Row>
            <Row className="description-row">
              <div className="input-container">
                <label>Story Description:</label>

                <textarea
                  type="text"
                  placeholder="Growing up in Birmingham in the 40's"
                  onChange={(event) => {
                    handleStoryDescription(event.target.value);
                  }}
                />
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
                <DatePickerComponent handleDate={handleDate} />
              </div>
            </Row>

            <Row className="story-text-row">
              <div className="input-container">
                <label>Write your story:</label>
                <textarea
                  type="textarea"
                  placeholder="Growing up in Birmingham in the 40's"
                  onChange={(event) => {
                    handleStory(event.target.value);
                  }}
                />
              </div>
            </Row>
            {/* <Row className="video-row">
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
          </Row> */}
            <Row className="btn-row">
              <div className="input-container">
                <button className="draft-btn">Save Draft</button>
                <button className="preview-btn">Preview</button>
                <button className="upload-btn" type="submit">
                  Upload
                </button>
              </div>
            </Row>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UploadForm;
