import { useState, useEffect } from "react";
import StoryCard from "./storyCard/storyCard";
import { Row, Col } from "react-bootstrap";
import Footer from "../Footer/footer";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./storyCollection.css";
import supabase from "../../config/supabaseClient";
import "./../homePageStory/homePageStory.css"


export default function StoryCollection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const input = searchParams.get("continent");
  console.log(searchParams)
  
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("stories")
        .select()
        .eq("story_continent", input);

      if (data !== null) {
        setResult(data);
      }

      if (error) {
        alert("error");
        console.log(error);
      }
    };

    fetchData();
  }, [input]);

  useEffect(() => {
    console.log(result); // Log the updated result state
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
                  <Col sm={12} md={4}>
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

