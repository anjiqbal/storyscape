import { Row, Col } from "react-bootstrap";
import "./uploadForm.css";
import supabase from "../../config/supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePickerComponent from "./datePicker/datePickerForm";
import LocationInput from "./locationInput/locationInput";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import countries from "./../search/countries";

function UploadForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [story, setStory] = useState("");
  // const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [storyObject, setStoryObject] = useState({});

  function handleCountry(e) {
    const searchTerm = e.target.value;
    setInput(searchTerm);
  }

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

    if (!date) {
      // Date is not selected, display error message or take necessary action
     alert("Please select a date");
      return;
    }

    const newStoryObject = {
      story_title: title,
      story_description: storyDescription,
      story_location: input,
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
        navigate("/fail");
      }
    }

    uploadStory();
  }
  console.log(storyObject);

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
                  required
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
                  required
                  rows="4"
                  type="text"
                  placeholder="Growing up in Birmingham in the 40's"
                  onChange={(event) => {
                    handleStoryDescription(event.target.value);
                  }}
                />
              </div>
            </Row>
            <Row className="continent-row">
            <label className="label-continent">Story Location-continent:</label>
            <select
             required
            className="search-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            
          >
           <option value="">Search for a continent</option> {/* Default empty option */}
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
              </Row>
            <Row className="location-row">
              <div className="input-container">
                <label>Story Location-country:</label>
                

                <div id="input-container">
                  <select
                    className="search-input"
                    required
                    onChange={handleCountry}
                  >
                    <option value="">Search for a country</option> {/* Default empty option */}
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </div>
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
                  required
                  rows="10"
                  type="textarea"
                  placeholder="Growing up in Birmingham in the 40's"
                  onChange={(event) => {
                    handleStory(event.target.value);
                  }}
                />
              </div>
            </Row>

            <Row className="btn-row">
              <div className="btn-container">
                {/* <button id="draft-btn">Save Draft</button> */}
                <button id="preview-btn">Preview</button>
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

{
  /* <Row className="video-row">
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
          </Row> */
}
