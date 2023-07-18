import { useState, useEffect } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import Footer from "../Footer/footer";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./app.css";
import StoryMission from "../storyMissionCard/storyMission";
import HomePageStory from "../homePageStory/homePageStory";
import supabase from "../../config/supabaseClient.jsx";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [stories, setStories] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { loggedIn } = location.state || { loggedIn: false };

  function handleUploadButton(event) {
    event.preventDefault();
    if (!loggedIn) {
      alert("Please login to upload a story");
      navigate("/signUp", { state: { loggedIn } });
      return;
    } else navigate("/uploadForm", { state: { loggedIn } });
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
 
  return (
    <main className={`app ${darkMode ? "dark-mode" : ""}`}>
      <header>
        <Navbar />
      </header>
      <div className="filler"></div>
      <div className="first-row">
        <Row>
          <Col xs={12} s={12} md={12} lg={6} className="home-storymission">
            <StoryMission />
          </Col>
          <Col xs={12} s={12} md={12} lg={6}>
            <Row>
              <div id="form-container">
                <h2 className="homepage-input-headings">
                  Discover stories from around the world
                </h2>
                <Search />
              </div>
            </Row>
            <Row>
              <section className="upload-form">
                <form onSubmit={handleUploadButton}>
                  <h2 className="homepage-input-headings">
                    Or, upload your own...
                  </h2>
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
        <h3 className="trending-title">Trending on StoryScape</h3>
        <Row>
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
