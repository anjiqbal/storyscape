import logo from "./inverted-logo.png";
import Search from "../search/search";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Logo and description */}
            <div>
              <img src={logo} alt="Logo" className="footer-logo" />
              <p className="text-white">
                Connecting the world through our life stories and experiences
              </p>
            </div>
          </div>
          <div className="col-lg-4 text-white links">
            {/* Links */}
            <div>
              <h4 className="text-white">Links</h4>
              <ul>
                <li>
                <Link className="nav-link text-white" to="/">
              Home
            </Link>
                </li>
                <li>
                <Link className="nav-link text-white" to="/aboutUs">
              About Us
            </Link>
                </li>
                <li>
                <Link className="nav-link text-white" to="/uploadForm">
              Upload
            </Link>
                </li>
                <li>
                <Link className="nav-link text-white" to="/discover">
              Discover
            </Link>
                </li>
                <li>
                <Link className="nav-link text-white" to="/signUp">
              Sign In
            </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Search */}
            <div className="footer-search search-description" >
              <Search />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
