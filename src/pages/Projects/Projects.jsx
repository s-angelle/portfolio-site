import React from "react";
import Project1 from "../../images/humble-beginnings-website.png";
import Project2 from "../../images/balance-of-fate-game.png";
import Project3 from "../../images/omdb-app.png";
import Project4 from "../../images/dog-brary-app.png";
import Project5 from "../../images/wander-shop-fullstack.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <article id="projects-intro">
        <h2>Check Out Some of My Projects</h2>
        <p className="animate__animated animate__bounceInDown animate__delay-1s "id="projects-p">
          These hand-selected projects are the result of progress from{" "}
          <u>ZERO</u> coding experience to full-stack applications in only{" "}
          <u>FOUR</u> months.{" "}
        </p>
      </article>
      <div className="animate__animated animate__slideInUp"id="main-projects-div">
        <div className="project img">
          <a
            href="https://github.com/s-angelle/s-angelle.github.io"
            target="_blank"
          >
            <img id='hover'src={Project1} />
          </a>
        </div>
        <div className="project img">
          <a
            href="https://github.com/s-angelle/the-balance-of-fate-game"
            target="_blank"
          >
            <img src={Project2} />
          </a>
        </div>
        <div className="project img">
          <a href="https://github.com/s-angelle/omdb-movie-app" target="_blank">
            <img src={Project3} />
          </a>
        </div>
        <div className="project img bottom">
          <a
            href="https://github.com/s-angelle/the-dog-brary-app"
            target="_blank"
          >
            <img src={Project4} />
          </a>
        </div>
        <div className="project img bottom">
          <a href="https://github.com/s-angelle/the-wander-shop-frontend-v2">
            <img src={Project5} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
