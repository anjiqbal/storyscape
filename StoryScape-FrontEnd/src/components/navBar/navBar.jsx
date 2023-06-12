import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';
import { FcHome } from 'react-icons/fc';
import { FcGlobe } from 'react-icons/fc';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import { FaRegHandshake } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

export default function NavBar() {
  return (
    <Navbar className="nav" collapseOnSelect expand="lg">
      <Container className="navBarContainer">
        <Navbar.Brand className="brand" href="#home">
          Story Scape
        </Navbar.Brand>
        <Nav.Link className="navElement profileLink" href="#ourstory">
          <ImProfile /> Profile
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="linkContainer">
            <Nav.Link className="navElement" href="#home">
              <FcHome /> Home
            </Nav.Link>
            <Nav.Link className="navElement" href="#map">
              <FcGlobe /> Map
            </Nav.Link>
            <Nav.Link className="navElement" href="#post">
              <BsFillEnvelopeFill /> Post
            </Nav.Link>
            <Nav.Link className="navElement" href="#stories">
              <GoBook /> Stories
            </Nav.Link>
            <Nav.Link className="navElement" href="#ourstory">
              <FaRegHandshake /> Our Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
