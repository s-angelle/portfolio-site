import React from 'react';
import "./Home.css";
import HomepagePhoto from "../../images/Futuristic-photo1.jpeg";

const Home = () => {
    return (
        <div id="greeting-div">
            <h5> Hi, my name is</h5>
            <h1 id="author-name" >Sabrina Angelle</h1>
            <h3 id="intro-div"> I'm a web developer who thoroughly enjoys creating a visually stimulating, user-friendly experience. I'm currently seeking a collaborative environment to further enhance my coding skills. </h3>
            {/* <img id="homepage-photo" src={HomepagePhoto} /> */}
        </div>
    );
}

export default Home;
