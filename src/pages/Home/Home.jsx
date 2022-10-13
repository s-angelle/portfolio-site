import React from 'react';
import "./Home.css";


const Home = () => {
    return (
        <div id="greeting-div">
            <h5 className="animate__animated animate__rollIn"> Hi, my name is</h5>
            <h1 className="animate__animated animate__fadeInDown animate__delay-2s" id="author-name" >Sabrina Angelle</h1>
            <h3 className="animate__animated animate__backInUp animate__delay-3s" id="intro-div"> I'm a web developer who thoroughly enjoys creating a visually stimulating, user-friendly experience. I'm currently seeking a collaborative environment to further enhance my coding skills. </h3>
        </div>
    );
}

export default Home;
