import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-page-main-div">
      <div id="contact-page-heading-div">
        <h2 class="contact-heading animate__animated animate__lightSpeedInLeft">
          Want to build together?
        </h2>
        <p
          id="contact-p"
          class="animate__animated animate__fadeIn animate__delay-1s"
        >
          Or
        </p>
        <h2 class="contact-heading animate__animated animate__lightSpeedInRight animate__delay-2s">
          Have any questions?
        </h2>
      </div>
      <div id="contact-page-heading-div">
        <h3 className="animate__animated animate__zoomInUp animate__delay-3s">
          Get In Touch
        </h3>
      </div>
      <button
        id="contact-page-button"
        className="animate__animated animate__zoomInUp animate__delay-3s"
      >
        Say Hi
      </button>
    </div>
  );
};

export default Contact;
