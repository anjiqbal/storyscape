import { useLocation } from "react-router-dom";
import "./Story.css";
import NavBar from "../../navBar/navBar";
import Footer from "../../Footer/footer";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png";

export default function StoryPage() {
  const location = useLocation();
  const { storyId, storyTitle, storyLocation, storyDescription, storyMain } =
    location.state;

  return (
    <>
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
          <Container className="mainStoryImageContainer">
            <img
              src={placeholderImage}
              alt="StoryImage"
              className="mainStoryImage"
            />
          </Container>
          </Container>
          <Container className="mainStoryLocation">
            <p>{storyLocation}</p>
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
    </>
  );
}
