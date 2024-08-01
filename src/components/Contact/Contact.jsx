import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";
import PhoneNumbers from "../PhoneNumbers/PhoneNumbers";

const Contact = () => {
  return (
    <div>
      <ContactInfo />
      <ContactForm />
      <PhoneNumbers />
    </div>
  );
};

export default Contact;
