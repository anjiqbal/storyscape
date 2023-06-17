import { useState } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";
import "./app.css";
import StoryMission from "../storyMissionCard/storyMission";
import HomePageStory from "../homePageStory/homePageStory";
// import { Button, Row, Col } from "react-bootstrap";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const navigate = useNavigate();

  function handleUploadButton(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }

  return (
    <div >
      {/* Navbar section */}
      <header>
        <Navbar />
      </header>
      {/* Search a country to discover stories section */}
      <section className="card">
        <div className="form-container">
          <Search setSearchTerm={setSearchTerm} />
        </div>
      </section>
      {/* Story Mission section */}
      <section className="story-mission">
        <StoryMission />
      </section>
      {/* Upload Form section */}
      <section className="upload-form">
        <form onSubmit={handleUploadButton}>
          <button type="submit" className="upload-story-btn">
            Upload a Story
          </button>
        </form>
      </section>
      {/* Home Page Story section */}
      <section className="home-page-story">
        <HomePageStory />
      </section>
    </div>
  );
}
export default App;
