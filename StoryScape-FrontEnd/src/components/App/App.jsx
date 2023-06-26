import { useState, useEffect } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./app.css";
import StoryMission from "../storyMissionCard/storyMission";
import HomePageStory from "../homePageStory/homePageStory";
import supabase from "../../config/supabaseClient.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [stories, setStories] = useState(null);
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]); // State to store the fetched user data
  // console.log(supabase);

  function handleUploadButton(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("stories").select();
      if (error) {
        alert("error");
        setFetchError("could not fetch stories");
        setStories(null);
        console.log(error);
      }
      if (data) {
        setStories(data);
        setFetchError(null);
      }
    };

    fetchData();
  }, []);

  //FOR DARK MODE
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <main className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar section */}
      <header>
        <Navbar />
        {/* <button onClick={toggleDarkMode} className="dark-btn">
          Toggle Dark Mode
        </button> */}
      </header>
      <div className="filler"></div>
      <div className="first-row">
        <Row>
          {/* StoryMission component */}
          <Col xs={12} s={12} md={12} lg={6} className="home-storymission">
            <StoryMission />
          </Col>
          {/* Search component and Upload button */}
          <Col xs={12} s={12} md={12} lg={6}>
            <Row>
              <div id="form-container">
                <h4 className="homepage-input-headings">
                  Discover stories from around the world
                </h4>
                <Search />
              </div>
            </Row>
            <Row>
              
                <section className="upload-form">
                  <form onSubmit={handleUploadButton}>
                  <h4 className="homepage-input-headings">Or, upload your own...</h4>
                    <button type="submit" className="upload-story-btn">
                      Upload
                    </button>
                  </form>
                </section>
             
            </Row>
          </Col>
        </Row>
      </div>
      <div className="filler-two"></div>
      <div className="second-row">
        <h2 className="trending-title">Trending on StoryScape</h2>
        <Row>
          {/* HomePageStory components */}
          <Col sm={12} md={4}>
            <HomePageStory stories={stories} />
          </Col>
          <Col sm={12} md={4}>
            <HomePageStory stories={stories} />
          </Col>
          <Col sm={12} md={4}>
            <HomePageStory stories={stories} />
          </Col>
        </Row>
      </div>
      <div className="footer">
        <Row>
          <Footer />
        </Row>
      </div>
    </main>
  );
}

export default App;
