import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient.jsx";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import StoryCard from "../storyCollection/storyCard/storyCard.jsx";
import { Row, Col, Container } from "react-bootstrap";
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
      <div>
        {result && (
          <Container>
            <main className="main-content">
              <Row className="h-100">
                {result.length === 0 ? (
                  <Col>
                    <p>No matching stories found.</p>
                  </Col>
                ) : (
                  result.map((story) => (
                    <Col xs={12} sm={12} md={6} lg={4}  key={story.story_id}>
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
          </Container>
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
