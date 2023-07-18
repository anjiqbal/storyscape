import logo from "./inverted-logo-pic.png";
import Search from "../search/search";
import { useNavigate, useLocation,Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {

  const navigate = useNavigate();
  const location = useLocation();
  const loggedIn = location.state ? location.state.loggedIn : false;

  const handleUploadClick = (event) => {
    event.preventDefault();

    if (!loggedIn) {
      alert("Please login to upload a story");
      navigate("/signUp", { state: { loggedIn } });
    } else {
      navigate("/uploadForm");
    }
  };
  return (
    <footer className="w-100 py-4 flex-shrink-0 footer-container">
      <div className="container py-4 outer-container">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <img src={logo} alt="Logo" className="footer-logo mb-3" />
            <p className="small text-white mr-20">
              Connecting the world through our life stories and experiences
            </p>
            <p className="small text-white mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <a className="link-light" id="footer-site-link" href="https://storyscape.netlify.app/">
                storyscape.netlify.com
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-md-6 links-container">
            <p className="text-white mb-3 link-heading">Quick links</p>
            <ul className="list-unstyled text-white">
            <li>
             <Link className="text-white link" to="/">
           Home
         </Link>
             </li>
             <li>
             <Link className="text-white link" to="/aboutUs">
           About Us
         </Link>
             </li>
             <li>
             <Link className="text-white link" to="/uploadForm" onClick={handleUploadClick}>
           Upload
         </Link>
             </li>
             <li>
             <Link className="text-white link" to="/discover">
           Discover
         </Link>
             </li>
             <li>
             <Link className="text-white link" to="/signUp">
           Sign In
         </Link>
             </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 links-container">
            <p className="text-white mb-3 link-heading">Useful links</p>
            <ul className="list-unstyled text-white">
              <li>
                <a
                  className="text-white link"
                  href="https://www.grammarly.com/blog/writing-tips/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Writing Tips
                </a>
              </li>
              <li>
                <a
                  className="text-white link"
                  href="https://www.grammarly.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Grammarly
                </a>
              </li>
              <li>
                <a
                  className="text-white link"
                  href="https://blog.reedsy.com/writing-tools/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Writing Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="input-group mb-3">
              <div className="footer-search search-description">
                <h5 className="text-white search-heading">
                  Discover stories from around the world
                </h5>
                <div className="footer-search">
                  <Search
                    setSearchTerm={() => {}}
                    showDescription={false}
                    isFooter={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
