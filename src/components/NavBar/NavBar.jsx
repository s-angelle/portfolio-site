import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Logo from "../../images/Logo1.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark custom navbar-expand-lg p-3"
        id="navbar"
      >
        <div className="container-fluid d-flex justify-content-end">
          <a href="/" className="navbar-brand col">
            <img id="logo" src={Logo} alt="Logo" />
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
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1pqaTYvxm3yiNIahG2QIT2-CRlLjdLaye/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item mt-1 underline">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mt-1">
                <a
                  id="github-link"
                  className="nav-link"
                  href="https://github.com/s-angelle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub id="github-icon" />
                </a>
              </li>
              <li className="nav-item mt-1">
                <a
                  id="linkedin-link"
                  className="nav-link"
                  href="https://www.linkedin.com/in/sabrina-angelle"
                  target="_blank"
                  rel="noreferrer"
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
