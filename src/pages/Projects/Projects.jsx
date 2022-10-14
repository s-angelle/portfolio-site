import Project1 from "../../images/humble-beginnings-website.jpg";
import Project2 from "../../images/balance-of-fate-game.png";
import Project3 from "../../images/omdb-app.png";
import Project4 from "../../images/dog-brary-app.jpg";
import Project5 from "../../images/wander-shop-fullstack.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <article id="projects-intro">
        <h2>Check Out Some of My Projects</h2>
        <p
          className="animate__animated animate__bounceInDown animate__delay-1s "
          id="projects-p"
        >
          These hand-selected projects are the result of progress from{" "}
          <u>ZERO</u> coding experience to full-stack applications in only{" "}
          <u>FOUR</u> months.{" "}
        </p>
      </article>
      <div
        className="animate__animated animate__slideInUp"
        id="main-projects-div"
      >
        <div className="project">
          <a
            href="https://github.com/s-angelle/s-angelle.github.io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-zoom" src={Project1} alt="project-example" />
          </a>
        </div>
        <div className="project">
          <a
            href="https://github.com/s-angelle/the-balance-of-fate-game"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-zoom" src={Project2} alt="project-example" />
          </a>
        </div>
        <div className="project">
          <a
            href="https://github.com/s-angelle/omdb-movie-app"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-zoom" src={Project3} alt="project-example" />
          </a>
        </div>
        <div className="project bottom">
          <a
            href="https://github.com/s-angelle/the-dog-brary-app"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-zoom" src={Project4} alt="project-example" />
          </a>
        </div>
        <div className="project bottom">
          <a
            href="https://github.com/s-angelle/the-wander-shop-frontend-v2"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img-zoom" src={Project5} alt="project-example" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
