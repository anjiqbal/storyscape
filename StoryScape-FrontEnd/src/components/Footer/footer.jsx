import logo from "./inverted-logo-pic.png";
import Search from "../search/search";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4 outer-container">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <img src={logo} alt="Logo" className="footer-logo mb-3" />
            <p className="small text-white mr-20">
              Connecting the world through our life stories and experiences
            </p>
            <p className="small text-white mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <a className="text-primary" href="#">
                storyscape.netlify.com
              </a>
            </p>
          </div>
          <div className="col-lg-2 col-md-6 links-container">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-white link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white link" href="/aboutUs">
                  About
                </a>
              </li>
              <li>
                <a className="text-white link" href="/uploadForm">
                  Upload
                </a>
              </li>
              <li>
                <a className="text-white link" href="discover">
                  Discover
                </a>
              </li>
              <li>
                <a className="text-white link" href="signUp">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 links-container">
            <h5 className="text-white mb-3">Useful links</h5>
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

// <footer classNameName="footer mt-auto py-3 bg-dark">
//   <div classNameName="container">
//     <div classNameName="row">

//       <div classNameName="col-lg-4 text-white links">
//         {/* Links */}
//         <div>
//           <h4 classNameName="text-white">Links</h4>
//           <ul>
//             <li>
//             <Link classNameName="nav-link text-white" to="/">
//           Home
//         </Link>
//             </li>
//             <li>
//             <Link classNameName="nav-link text-white" to="/aboutUs">
//           About Us
//         </Link>
//             </li>
//             <li>
//             <Link classNameName="nav-link text-white" to="/uploadForm">
//           Upload
//         </Link>
//             </li>
//             <li>
//             <Link classNameName="nav-link text-white" to="/discover">
//           Discover
//         </Link>
//             </li>
//             <li>
//             <Link classNameName="nav-link text-white" to="/signUp">
//           Sign In
//         </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div classNameName="col-lg-4">
//         {/* Logo and description */}
//         <div>
//           <img src={logo} alt="Logo" classNameName="footer-logo" />
//           <p classNameName="text-white">
//             Connecting the world through our life stories and experiences
//           </p>
//         </div>
//       </div>
//       <div classNameName="col-lg-4">
//         {/* Search */}
//         <div classNameName="footer-search search-description" >
//           <Search />
//         </div>
//       </div>

//     </div>
//   </div>
// </footer>
