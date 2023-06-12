import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';

export default function NavBar() {
    return (
<Navbar className="nav" collapseOnSelect expand="lg" >
<Container className="navBarContainer">
  <Navbar.Brand href="#home">Story Scape</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#map">Map</Nav.Link>
      <Nav.Link href="#post">Post</Nav.Link>
      <Nav.Link href="#stories">Stories</Nav.Link>
      <Nav.Link href="#ourstory">Our Story</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
)
}