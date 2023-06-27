import { useLocation } from "react-router-dom";
import "./Story.css";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png";

export default function StoryPage() {
  const location = useLocation();
  const { storyId, storyImage, storyTitle, storyContinent, storyDescription, storyMain, storyLocation, storyDate } =
    location.state;
console.log(storyImage)

  return (
    <>
    <div className="entireContainer">
      <header>
        {" "}
        <NavBar />{" "}
      </header>
      <Container className="mainStoryContainer">
        <div>
          <Container className="mainStoryTitle">
            <h2>{storyTitle}</h2>
          </Container>
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
          <Container className="mainStoryContinent">
            <p>{storyContinent}</p>
          </Container>
          <Container className="storyLocation">
            <p>{storyLocation}</p>
          </Container>
          <Container className="storyDate">
            <p>{storyDate}</p>
          </Container>
        
          <Container className="mainStoryMain">
            <p>{storyMain}</p>
          </Container>

          {/* Render the full story content here */}
        </div>
      </Container>

      <footer>
        {" "}
        <Footer />{" "}
      </footer>
      </div>
    </>
  );
}
