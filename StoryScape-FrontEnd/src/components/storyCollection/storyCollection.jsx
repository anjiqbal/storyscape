import { useState, useEffect } from "react";
import StoryCard from "./storyCard/storyCard";
import { Row, Col, Button } from "react-bootstrap";
import Footer from "../Footer/footer";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../navBar/navBar";
import "./storyCollection.css";
import supabase from "../../config/supabaseClient";
import "./../homePageStory/homePageStory.css";

export default function StoryCollection() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const input = searchParams.get("continent");

  const [result, setResult] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error, isLoading } = await supabase
        .from("stories")
        .select()
        .eq("story_continent", input);

      if (!data && isLoading) {
        return <div>Loading...</div>;
      }

      if (data !== null) {
        setResult(data);
        setFilteredResults(data);
      }

      if (error) {
        alert("error");
      }
    };

    fetchData();
  }, [input]);

  const filterResultsByDateRange = () => {
    const filteredResults = result.filter((story) => {
      const storyDate = new Date(story.story_date);
      return (
        storyDate >= new Date(startDate) &&
        storyDate <= new Date(endDate)
      );
    });

    setFilteredResults(filteredResults);
  };

  const handleFilterClick = () => {
    filterResultsByDateRange();
  };

  return (
    <div className="story-collection-wrapper">
      <header>
        <NavBar />
      </header>
      <>
        <div className="date-range-picker-wrapper">
          <div>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <Button onClick={handleFilterClick}>Filter</Button>
        </div>
        {filteredResults && (
          <main className="story-collection-content">
            <Row className="h-100">
              {filteredResults.length === 0 ? (
                <Col>
                  <p>No matching stories found.</p>
                </Col>
              ) : (
                filteredResults.map((story) => (
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
