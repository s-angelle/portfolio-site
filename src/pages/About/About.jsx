import React from "react";
import "./About.css";
import AuthorPhoto from "../../images/author-photo.jpg";

const About = () => {

  return (
    <div id="about-main-div">
      <div id="author-image-div">
        <img className="animate__animated animate__bounceIn animate__delay-1s" src={AuthorPhoto} id="author-photo" />
      </div>
      <article id="about-article">
        <h2 id="about-heading" >About Me</h2>
        <p className="animate__animated animate__fadeIn animate__delay-2s"id='about-text'>
          I enjoy solving complex problems while simultaneously being creative.
          As a former police officer, I can view code and utilize my extensive
          problem solving skills to offer a fresh perspective on troubleshooting
          in a collaborative environment.
        </p>
      </article>
    </div>
  );
};

export default About;
