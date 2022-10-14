import { useRef } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./NavBar.css";
import Logo from "../../images/Logo1.png";

const NavBar = () => {
  const home = useRef(null);
  const about  = useRef(null);
  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

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
              <li ref={about} onClick ={() => scrollToSection(about)} className="nav-item mt-1 underline">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li ref={projects} onClick ={() => scrollToSection(projects)} className="nav-item mt-1 underline">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item mt-1 underline">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1JYSUswoM_TDguSBaI58-V-F9R3wLJqiq/view?usp=sharing"
                  target="_blank"
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
