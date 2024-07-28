import React from "react";
import "./ColorOfTheMonth.css";

const ColorOfTheMonth = () => {
  return (
    <div className="cotm-wrapper">
      <div className="cotm-content-wrapper">
        <div className="cotm-content-container">
          <div className="cotm-image-container">
            <img src="/assets/cotm-img.png" alt="" />
          </div>
          <div className="cotm-content-right">
            <h3>#ColorOfTheMonth</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h3>Just $35!!!</h3>
          </div>
        </div>
      </div>
      <div className="cotm-action-wrapper">
        <div className="cotm-action-container">
          <h3>Grab This Limited Time Offer</h3>
          <div className="cotm-action-button">
            <a className="button-one" href="#">
              <img src="/assets/double-right.png" />
              EXPLORE STORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorOfTheMonth;
