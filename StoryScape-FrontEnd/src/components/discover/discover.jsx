import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient.jsx";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import StoryCard from "../storyCollection/storyCard/storyCard.jsx";
import { Row, Col} from "react-bootstrap";
import "./discover.css";

export default function Discover() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("stories").select();

      if (data !== null) {
        setResult(data);
      }

      if (error) {
        alert("error");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className="story-collection-wrapper">
      <header>
        <NavBar />
      </header>
      <>
        {result && (
          <main className="story-collection-content">
            <Row className="h-100">
              {result.length === 0 ? (
                <Col>
                  <p>No matching stories found.</p>
                </Col>
              ) : (
                result.map((story) => (
                  <Col sm={12} md={4} key={story.story_id}>
                    <StoryCard
                      result={result}
                      storyId={story.story_id}
                      storyTitle={story.story_title}
                      storyLocation={story.story_continent}
                      storyDescription={story.story_description}
                    />
                  </Col>
                ))
              )}
            </Row>
          </main>
        )}
      </>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
