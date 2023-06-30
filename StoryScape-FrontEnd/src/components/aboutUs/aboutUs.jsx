import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";

import team from "./dreamteam.png";
import "./aboutUs.css";
import Container from "react-bootstrap/esm/Container";
export default function aboutUs() {
  return (
    <div className="about-us-page">
      <header>
        <NavBar />
      </header>
      <Container className="about-us">
        
          <div>
            <h1 className="story-heading">The StoryScape story</h1>
          </div>
        
          <div className="about-us-mission">
            <p>
              At StoryScape, we understand the profound loss that comes with the
              passing of a loved one, whether it's a parent, grandparent, or
              someone dear to your heart. Alongside their departure, countless
              untold stories are lost forever, leaving us longing for the
              wisdom, laughter, and cherished memories that could have been
              passed down to future generations.
              <br />
              <br />
              That's why we're here to offer a heartfelt solution. StoryScape
              provides a nurturing space where you can immortalize these
              invaluable stories, ensuring that they endure and continue to
              touch the lives of others.
              <br />
              <br />
              Our platform empowers you to capture and preserve these precious
              narratives, whether they are your own personal stories or tales
              shared by your loved ones. Through StoryScape, you can
              effortlessly upload and share these stories, fostering a legacy
              that transcends time and connects generations.
              <br />
              <br />
              Imagine the joy of discovering a story that not only captivates
              your imagination but also sheds light on your family's history,
              traditions, and values. With StoryScape, you have the power to
              safeguard these remarkable stories, ensuring they are never
              forgotten and are passed on for all to cherish.
              <br />
              <br />
              Join us on this heartfelt journey of remembrance and celebration.
              Together, let's honour our loved ones by embracing the power of
              storytelling and creating a lasting legacy that will resonate for
              generations to come.
            </p>
          </div>
          <div className="our-team">
          <h2 className="sys32-heading">We are System 32</h2>
          <p>Thrown together after 11 weeks on the School of Code bootcamp, the team has come together and created this product that we are all incredibly proud of.</p>
          <p>Our team consists of 6 members. Feel free to click on to our profiles and get in touch.</p>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/abdirahmanmohamed10/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Abdiraman Mohamed
            </a>
          </h5>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/akiel-chaudry-6666bb156/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Akiel Chaudry
            </a>
          </h5>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/anjum--iqbal/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Anjum Iqbal
            </a>
          </h5>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/jay-kirtlan-juniorfullstackdevuk/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Jay Kirtlan
            </a>
          </h5>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/qasim-mohammed-65251517b/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Qasim Mohammed
            </a>
          </h5>
          <h5 className="about-linkedin">
            <i className="bi bi-linkedin"></i>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/tripti-g-294089a6/"
              target="_blank"
              className="team-anchor"
            >
              &nbsp;Tripti Gurung
            </a>
          </h5>
          </div>
          <div className="about-img">
          <img src={team} />
          </div>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
