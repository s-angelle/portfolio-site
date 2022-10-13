import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./NavBar.css";
import Logo from "../../images/Logo1.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark custom navbar-expand-lg p-3" id="navbar">
        <div className="container-fluid d-flex justify-content-end">
          <a href="/" className="navbar-brand col">
          <img id="logo" src={Logo} alt='Logo' />

          </a>
          <button
            className="navbar-toggler"
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="navbar-toggler"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
              <li className="nav-item mt-1 underline">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mt-1 underline">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item mt-1 underline">
                <a className="nav-link" href="mailto:sabrinaangelle@ymail.com">
                  Contact
                </a>
              </li>
              <li className="nav-item mt-1 underline">
                <a
                  className="nav-link"
                  href="https://www.canva.com/design/DAFHwaDxw34/mZmh7VsekQK5w9byzgLrxw/view?utm_content=DAFHwaDxw34&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item mt-1">
                <a
                  className="nav-link"
                  href="https://github.com/s-angelle"
                  id="github-link"
                  target="_blank"
                >
                  <AiFillGithub id="github-icon" />
                </a>
              </li>
              <li className="nav-item mt-1">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/sabrina-angelle"
                  id="linkedin-link"
                  target="_blank"
                >
                  <AiFillLinkedin id="linkedin-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
