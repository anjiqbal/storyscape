import logo from "./logo-image.png";
import "./navBar.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = location.state ? location.state.loggedIn : false;
  const [isLoggedOut, setIsLoggedOut] = useState(!loggedIn);

  const handleUploadClick = (event) => {
    event.preventDefault();

    if (!loggedIn) {
      alert("Please login to upload a story");
      navigate("/signUp", { state: { loggedIn } });
    } else {
      navigate("/uploadForm");
    }
    setIsLoggedOut(false);
  };

  const handleSignOut = () => {
    setIsLoggedOut(true);
    // Add your sign out logic here
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   navigate("/", { state: { loggedIn } });
  // };
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-brand-name">StoryScape</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/uploadForm" onClick={handleUploadClick}>
              Upload
            </Link>
            <Link className="nav-link" to="/discover">
              Discover
            </Link>
            <Link className="nav-link" to={isLoggedOut ? "/signUp" : "/"} onClick={isLoggedOut ? undefined : handleSignOut}>
              {isLoggedOut ? "Sign In" : "Sign Out"}
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}


  /* <Navbar className="nav" collapseOnSelect expand="lg">
<Container className="navBarContainer">
  <Navbar.Brand className="brand" as={Link} to="">
    Story Scape
  </Navbar.Brand>
  <Nav.Link className="navElement profileLink" as={Link} to="profileOwn"> {/*corrected this*/

//      Profile
//   </Nav.Link>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="linkContainer">
//       <Nav.Link className="navElement" as={Link} to="">{/*left empty but could be wrong*/}
//       Home
//       </Nav.Link>
//       {/*<Nav.Link className="navElement" as={Link} to="M">
//         <FcGlobe /> Map
//       </Nav.Link>*/}                    {/*map commented out until we have a map page*/ }
//       <Nav.Link className="navElement" as={Link} to="uploadForm">
//       Post
//       </Nav.Link>
//       <Nav.Link className="navElement" as={Link} to=""> {/*left empty because not sure on destination*/}
//        Stories
//       </Nav.Link>
//       <Nav.Link className="navElement" as={Link} to="aboutUs">
//       Our Story
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Container>
// </Navbar> */}
