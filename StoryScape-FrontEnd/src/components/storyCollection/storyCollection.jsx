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
  // console.log(searchParams)
  
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error, isLoading } = await supabase
        .from("stories")
        .select()
        .eq("story_continent", input);

      if (!data && isLoading ) {
        return <div>Loading...</div>;
      }

      if (data !== null) {
        setResult(data);
      }

      if (error) {
        alert("error");
        // console.log(error);
      }
    };

    fetchData();
  }, [input]);

  console.log(location);

  useEffect(() => {
    // console.log(result); // Log the updated result state
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
              {result!==null && result.length === 0 ? (
                <Col>
                  <p>No matching stories found.</p>
                </Col>
              ) : (
                result.map((story) => (
                  <Col xs={12} sm={12} md={6} lg={4} key={story.story_id}>
                    <StoryCard
                      result={result}
                      storyImage={story.story_url}
                      storyId={story.story_id}
                      storyTitle={story.story_title}
                      storyContinent={story.story_continent}
                      storyDescription={story.story_description}
                      storyMain={story.story_main}
                      storyLocation={story.story_country}
                      storyDate={story.story_date}
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

