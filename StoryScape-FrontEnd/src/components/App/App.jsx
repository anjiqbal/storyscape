import { useState, useEffect } from "react";
import Search from "../search/search";
import Navbar from "../navBar/navBar";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./app.css";
import StoryMission from "../storyMissionCard/storyMission";
import HomePageStory from "../homePageStory/homePageStory";
//import supabase from "../../config/supabaseClient.jsx";
import {createClient} from '@supabase/supabase-js';


const supabaseURL =import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey =import.meta.env.VITE_APP_ANON_KEY;

const supabase = createClient(supabaseURL, supabaseKey);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchError, setFetchError] = useState(null)
  const [stories,setStories]= useState(null)

  const navigate = useNavigate();
  console.log(supabase);
  function handleUploadButton(event) {
    event.preventDefault();
    navigate("/uploadForm");
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('stories').select()
      if (error){	
				setFetchError('could not fetch stories')
				setStories(null)
				console.log(error)
      }
			if (data) {
				setStories(data)
				setFetchError(null)
				}
    };

    fetchData();
  }, []);
  
  console.log(stories)

  return (
    <main className="app">
      {/* Navbar section */}
      <header>
        <Navbar />
      </header>
      <div className="filler"></div>
      <div className="first-row">
        <Row>
          {/* StoryMission component */}
          <Col xs={12} md={6}>
            <StoryMission />
          </Col>
          {/* Search component and Upload button */}
          <Col xs={12} md={6}>
            <Row>
              <Col>
                <div className="form-container">
                  <Search setSearchTerm={setSearchTerm} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <section className="upload-form">
                  <form onSubmit={handleUploadButton}>
                    <button type="submit" className="upload-story-btn">
                      Upload a Story
                    </button>
                  </form>
                </section>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="filler-two"></div>
      <div className="second-row">
        <h2>Trending on StoryScape</h2>
        <Row>
          {/* HomePageStory components */}
          <Col sm={12} md={4}>
            <HomePageStory />
          </Col>
          <Col sm={12} md={4}>
            <HomePageStory />
          </Col>
          <Col sm={12} md={4}>
            <HomePageStory />
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
