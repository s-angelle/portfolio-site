import React from "react";
import "./About.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AuthorPhoto from "../../images/author-photo.jpg";

const About = () => {

  return (
    <div id="about-main-div">
      <div id="author-image-div">
      <AnimationOnScroll animateIn="animate__bounceIn animate__delay-1s">
        <img data-aos="fade-right" src={AuthorPhoto} id="author-photo" />
        </AnimationOnScroll>
      </div>
      <article id="about-article">
        <h2 id="about-heading" >About Me</h2>
        <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1s">
        <p id='about-text'>
          I enjoy solving complex problems while simultaneously being creative.
          As a former police officer, I can view code and utilize my extensive
          problem solving skills to offer a fresh perspective on troubleshooting
          in a collaborative environment.
        </p>
        </AnimationOnScroll>
      </article>
    </div>
  );
};

export default About;
