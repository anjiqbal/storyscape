import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Story.css";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png";
import supabase from "../../../config/supabaseClient";

export default function StoryPage() {
  const location = useLocation();
  const { id } = useParams(); // Retrieve storyId from the URL
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        const { data, error } = await supabase
          .from("stories")
          .select()
          .eq("story_id", id)
          .single();

        if (error) {
          console.error(error);
        } else {
          setStoryData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStoryData();
  }, [id]);

  return (
    <>
      <div className="entireContainer">
        <header>
          <NavBar />
        </header>
        <Container className="mainStoryContainer">
          {storyData ? (
            <>
              <h2 className="mainStoryTitle">{storyData.story_title}</h2>

              <Container className="imageContainerMain">
                {storyData.story_url ? (
                  <Container className="mainStoryImageContainer">
                    <img
                      src={storyData.story_url}
                      alt="StoryImage"
                      className="mainStoryImage"
                    />
                  </Container>
                ) : (
                  <Container className="mainStoryImageContainer">
                    <img
                      src={placeholderImage}
                      alt="PlaceholderImage"
                      className="mainStoryImage"
                    />
                  </Container>
                )}
              </Container>
              <Container className="main-story-content">
                <p className="mainStoryContinent">{storyData.story_continent}</p>

                <p className="storyLocation">{storyData.story_country}</p>

                <p className="storyDate">{storyData.story_date}</p>

                <p className="mainStoryMain">{storyData.story_main}</p>
              </Container>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Container>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
