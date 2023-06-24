import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import weDaBest from "./djk.png";
import './aboutUs.css'
import Container from 'react-bootstrap/esm/Container'

export default function aboutUs() {
  return (
    <>
    <div className= 'about-us-page'>
      <header>
        <NavBar />
      </header>
      <Container className= 'about-us'>
      <div className="wedabest">
      <h2>We are System 32</h2>
      <h3>Our team consists of 6 members:</h3>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/abdirahmanmohamed10/" target="_blank">&nbsp;Abdiraman Mohamed</a></h5>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/akiel-chaudry-6666bb156/" target="_blank">&nbsp;Akiel Chaudry</a></h5>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/anjum--iqbal/" target="_blank">&nbsp;Anjum Iqbal</a></h5>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/jay-kirtlan-juniorfullstackdevuk/" target="_blank">&nbsp;Jay Kirtlan</a></h5>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/qasim-mohammed-65251517b/" target="_blank">&nbsp;Qasim Mohammed</a></h5>
      <h5><i className="bi bi-linkedin"></i><a href="https://www.linkedin.com/in/tripti-g-294089a6/" target="_blank">&nbsp;Tripti Gurung</a></h5>

      <img src={weDaBest} />
      </div>
      </Container>
    </div>
      <Footer />
    </>
  );
}
