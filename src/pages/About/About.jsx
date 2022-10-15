import AuthorPhoto from "../../images/author-photo.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about-main-div">
      <div id="author-image-div">
        <img
          id="author-photo"
          // className="animate__animated animate__bounceIn"
          src={AuthorPhoto}
          alt="author-portrait"
        />
      </div>
      <article id="about-article">
        <h2 id="about-heading">About Me</h2>
        <p
          id="about-text"
          className="animate__animated animate__fadeIn animate__delay-1s"
        >
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
