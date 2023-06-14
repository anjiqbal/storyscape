import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navBar.css';
//logos
import { FcHome } from 'react-icons/fc';
import { FcGlobe } from 'react-icons/fc';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { GoBook } from 'react-icons/go';
import { FaRegHandshake } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { useNavigate, Link } from "react-router-dom";


export default function NavBar() {

  const navigate = useNavigate();

  // function handleClick(event) {
  //   event.preventDefault();
  //   navigate(`/${props.path}`);
  // }
  // //href="#ProfileOwn"



  return (
  
    <Navbar className="nav" collapseOnSelect expand="lg">
      <Container className="navBarContainer">
        <Navbar.Brand className="brand" as={Link} to="">
          Story Scape
        </Navbar.Brand>
        <Nav.Link className="navElement profileLink" as={Link} to="profileOwn"> {/*corrected this*/}
          <ImProfile /> Profile
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="linkContainer">
            <Nav.Link className="navElement" as={Link} to="">{/*left empty but could be wrong*/}
              <FcHome /> Home
            </Nav.Link>
            {/*<Nav.Link className="navElement" as={Link} to="M">
              <FcGlobe /> Map
            </Nav.Link>*/}                    {/*map commented out until we have a map page*/ }
            <Nav.Link className="navElement" as={Link} to="uploadForm">
              <BsFillEnvelopeFill /> Post
            </Nav.Link>
            <Nav.Link className="navElement" as={Link} to=""> {/*left empty because not sure on destination*/}
              <GoBook /> Stories
            </Nav.Link>
            <Nav.Link className="navElement" as={Link} to="aboutUs">
              <FaRegHandshake /> Our Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
