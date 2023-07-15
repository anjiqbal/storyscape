import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import placeHolderImage from "./images/StoryScape_placeholder2.png";
import "./homePageStory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const HomePageStory = (props) => {
  const [story, setStory] = useState({});
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [imageToDisplay, setImageToDisplay] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    if (props.stories !== null && props.stories.length > 0) {
      const randomIndex = Math.floor(Math.random() * props.stories.length);

      if (randomIndex === previousIndex) {
        return;
      }

      setPreviousIndex(randomIndex);
      setStory(props.stories[randomIndex]);
    }
  }, [props.stories, previousIndex]);

  useEffect(() => {
    if (story.story_url) {
      setImageToDisplay(story.story_url);
    } else {
      setImageToDisplay(placeHolderImage);
    }
  }, [story]);

  function handleClick(event) {
    event.preventDefault();
    navigate(`/storyCollection/${story.story_continent}/${story.story_id}`, {
      state: {
        storyId: story.story_id,
        storyTitle: story.story_title,
        storyContinent: story.story_continent,
        storyDescription: story.story_description,
        storyMain: story.story_main,
        storyLocation: story.story_country,
        storyDate: story.story_date,
        storyImage: story.story_url,
      },
    });
  }
  
  

  return (
    <>
      {props.stories && props.stories.length > 0 && (

        <Container className="home-card-container" onClick={handleClick}>
            <div className="home-card-content">
              <div className="first-half">
                <div className="home-card-image-container">
                  <img src={imageToDisplay} alt="Story" className="story-card-image" />
                </div>
                <div className="home-story-details">
                  <h2 className="home-title">{story.story_title}</h2>
                  <em className="storyLocation">{story.story_country}, {story.story_continent} </em>
                  <em className="home-story-date">{story.story_date}</em>
                </div>
              </div>
              <div className="second-half">
                <p className="home-story-card-description">{story.story_description}</p>
              </div>
            </div>
          </Container>



      )}
    </>
  );
};


export default HomePageStory;

HomePageStory.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      story_id: PropTypes.string.isRequired,
      story_title: PropTypes.string.isRequired,
      story_continent: PropTypes.string.isRequired,
      story_description: PropTypes.string.isRequired,
      story_main: PropTypes.string.isRequired,
      story_country: PropTypes.string.isRequired,
      story_date: PropTypes.string.isRequired,
      story_url: PropTypes.string,
    })
  ),
};