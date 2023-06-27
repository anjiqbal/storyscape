import { useState, useEffect } from "react";
import placeHolderImage from "./images/StoryScape_placeholder2.png";
import "./homePageStory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";

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
    navigate(`/:${story.story_continent}/:${story.story_id}`);
    console.log(storyTitle)
  }
  

  return (
    <>
      {props.stories && props.stories.length > 0 && (
        <Container className="piccontainer">
          <img src={imageToDisplay} alt="Story" className="image" />
          <div className="ustorycontainer">
            <h2 className="title">{story.story_title}</h2>
            <em className="storyUserName">{story.story_continent}</em>
            <em className="storyLocation">{story.story_country}</em>
            <p className="text">{story.story_description}</p>
          </div>
          <button onClick={handleClick} className="click-here-btn">Click here for more...</button>
        </Container>
      )}
    </>
  );
};

export default HomePageStory;