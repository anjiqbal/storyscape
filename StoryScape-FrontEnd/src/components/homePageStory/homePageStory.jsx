import { useState, useEffect } from "react";

import placeHolderImage from "./images/StoryScape_placeholder2.png";
// import image2 from "./images/Story-2.jpg";
// import image3 from "./images/Story-3.jpg";
// import image4 from "./images/Story-4.jpg";
// import image5 from "./images/Story-5.jpg";
// import image6 from "./images/Story-6.jpg";
import "./homePageStory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { pl } from "date-fns/locale";

const HomePageStory = (props) => {
  const [story, setStory] = useState({});
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [imageToDisplay, setImageToDisplay] = useState(null);
  console.log(props.stories)
  const stories = props.stories
  // console.log(stories)
  
  useEffect(() => {
    if (props.stories !== null) {
      const randomIndex = Math.floor(Math.random() * stories.length);
      console.log();
      
      if (randomIndex === previousIndex) {
            return;
          }
          setPreviousIndex(randomIndex);
          setStory(stories[randomIndex]);
        // }, [stories.length, previousIndex]);

        if (story.image) {
          setImageToDisplay(story.image);
    
        } else {
          setImageToDisplay(placeHolderImage);
        }
        


      }
  }, [props.stories])

  return (
    <>
    {stories && (
    <Container className="piccontainer">
      <img src={imageToDisplay} alt="Story" className="image" />
      <div className="ustorycontainer">
        <h2 className="title">{story.story_title}</h2>
        <em className="storyUserName">  {story.story_location} </em>
        <p className="text">{story.story_Description}</p>
      </div>
    </Container>
    )}</>
  );
};

export default HomePageStory;
