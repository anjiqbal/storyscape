import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import "./storyCard.css";

export default function StoryCard({
  storyImage,
  storyTitle,
  storyContinent,
  storyDescription,
  storyMain,
  storyId,
  result,
  storyLocation,
  storyDate,
}) {
  const navigate = useNavigate();
  //const { story_id } = useParams();

  function handleClick(event) {
    event.preventDefault();
    navigate(`/storyCollection/${storyLocation}/${storyId}`, {
      state: {
        storyId,
        storyTitle,
        storyContinent,
        storyDescription,
        storyMain,
        storyLocation,
        storyDate,
        storyImage,
      },
    });
  }

  return (
    <>
      {result && (
        <ul>
          <Container className="card-container" onClick={handleClick}>
            <div className="card-content">
              <div className="first-half">
                <div className="story-card-image-container">
                  <img src={storyImage} alt="Story" className="story-card-image" />
                </div>
                <div className="story-details">
                  <h2 className="title">{storyTitle}</h2>
                  <em className="storyLocation">{storyLocation}, {storyContinent} </em>
                  <em className="storyDate">{storyDate}</em>
                </div>
              </div>
              <div className="second-half">
                <p className="story-card-description">{storyDescription}</p>
              </div>
            </div>
          </Container>
        </ul>
      )}
    </>
  );
}
StoryCard.propTypes = {
  storyImage: PropTypes.string.isRequired,
  storyTitle: PropTypes.string.isRequired,
  storyContinent: PropTypes.string.isRequired,
  storyDescription: PropTypes.string.isRequired,
  storyMain: PropTypes.string.isRequired,
  storyId: PropTypes.string.isRequired,
  result: PropTypes.bool.isRequired,
  storyLocation: PropTypes.string.isRequired,
  storyDate: PropTypes.string.isRequired,
};