import { useNavigate, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png"
import "../../homePageStory/homePageStory.css";

export default function StoryCard({ storyTitle, storyContinent, storyDescription, storyMain, storyId, result, storyLocation, storyDate }) {
  const navigate = useNavigate();
  const { story_id } = useParams();

  function handleClick(event) {
    event.preventDefault();
    navigate(`/storyCollection/${storyLocation}/${storyId}`, { state: { storyId, storyTitle, storyContinent, storyDescription, storyMain, storyLocation, storyDate} });
    console.log(storyTitle)
  }
  

  // function handleClick() {
  //   navigate("/story", { state: { storyId, storyTitle, storyContinent, storyDescription, storyMain, storyLocation, storyDate} });

  // }
  
  console.log(storyId);
  return (
    <>
    {result && (
      <ul>
      <Container className="piccontainer">
      <img src={placeholderImage} alt="Story" className="image" />
      <div className="ustorycontainer">
        <h2 className="title">{storyTitle}</h2>
        <em className="storyContinent">  {storyContinent} </em>
        <em className="storyLocation"> {storyLocation}</em>
        <em className="storyDate"> {storyDate}</em>
        <p className="storyDescription">{storyDescription}</p>
        {/* <p className="storyMain">{storyMain}</p> */}
      </div>
      <button onClick={handleClick} className="click-here-btn">Click here for more...</button>
    </Container>
      </ul>
    )}
    </>
  );
} 