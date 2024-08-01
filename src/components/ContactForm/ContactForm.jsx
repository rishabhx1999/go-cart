import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h5>Send Us A Message</h5>
        <form action="" className="contact-form" id="contact-form">
          <div className="name">
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
          </div>
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="" id="" placeholder="Message"></textarea>
          <div className="send-message">
            <a href="" className="button-one">
              SEND MESSAGE
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
