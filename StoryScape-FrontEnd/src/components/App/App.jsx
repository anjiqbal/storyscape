import { useState } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import { useNavigate } from "react-router-dom";
import "./app.css";
import StoryMission from "../storyMissionCard/storyMission";
import HomePageStory from "../homePageStory/homePageStory";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const navigate = useNavigate();

  function handleUploadButton(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }

  return (
    <>
    {/* Navbar section */}
      <div className="navbar">
        <Navbar />
      </div>
      {/* Search a country to discover stories section */}
      <div className="card">
        <section className="form-container">
          <Search  setSearchTerm={setSearchTerm} />
        </section>
      </div>
          <StoryMission />
          <form onSubmit={handleUploadButton}>
          <button type="submit" className="upload-story-btn">Upload a Story</button>
          </form>
      <HomePageStory/>
    </>
  );
}
export default App;
