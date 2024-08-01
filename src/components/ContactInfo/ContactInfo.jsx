import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-container">
        <div className="contact-info-left">
          <h1>Say Hello.</h1>
          <p>
            Qui dolore ipsum quia dolor sit amet, consectetur adipisci velit,
            sed quia non numquam eius modi Neque porro quis quam est.{" "}
          </p>
          <h6>212 7th St SE, Washington, DC 20003, USA</h6>
          <h6>info@example.com</h6>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6239755207985!2d-76.99840462518323!3d38.88684414732859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b831784fd8af%3A0xbffa5c4369ea62c!2s212%207th%20St%20SE%2C%20Washington%2C%20DC%2020003%2C%20USA!5e0!3m2!1sen!2sin!4v1722504629961!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
