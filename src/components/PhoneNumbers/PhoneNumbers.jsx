import React from "react";
import "./PhoneNumbers.css";

const PhoneNumbers = () => {
  return (
    <div className="phone-numbers-wrapper">
      <div className="phone-numbers-container">
        <div className="phone-number">
          <h6>Business</h6>
          <h5>123 456 7890</h5>
        </div>
        <div className="phone-number">
          <h6>Orders</h6>
          <h5>123 456 7890</h5>
        </div>
        <div className="phone-number">
          <h6>Support</h6>
          <h5>123 456 7890</h5>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumbers;
