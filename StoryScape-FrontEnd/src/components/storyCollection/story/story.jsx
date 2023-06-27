import { useLocation } from "react-router-dom";
import "./Story.css";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png";

export default function StoryPage() {
  const location = useLocation();
  const {
    storyId,
    storyImage,
    storyTitle,
    storyContinent,
    storyDescription,
    storyMain,
    storyLocation,
    storyDate,
  } = location.state;
  console.log(`THIS IS THE URL ${storyImage}`);
  console.log(location.state);
  return (
    <>
      <div className="entireContainer">
        <header>
          {" "}
          <NavBar />{" "}
        </header>
        <Container className="mainStoryContainer">
          <h2 className="mainStoryTitle">{storyTitle}</h2>

          <Container className="imageContainerMain">
            {storyImage && (
              <Container className="mainStoryImageContainer">
                <img
                  src={storyImage}
                  alt="StoryImage"
                  className="mainStoryImage"
                />
              </Container>
            )}
            {!storyImage && (
              <Container className="mainStoryImageContainer">
                <img
                  src={placeholderImage}
                  alt="PlaceholderImage"
                  className="mainStoryImage"
                />
              </Container>
            )}
          </Container>
          <Container className="main-story-content">
            <p className="mainStoryContinent">{storyContinent}</p>

            <p className="storyLocation">{storyLocation}</p>

            <p className="storyDate">{storyDate}</p>

            <p className="mainStoryMain">{storyMain}</p>
          </Container>
        </Container>

        <footer>
          {" "}
          <Footer />{" "}
        </footer>
      </div>
    </>
  );
}
