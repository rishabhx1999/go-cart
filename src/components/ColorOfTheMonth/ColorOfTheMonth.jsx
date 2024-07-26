import React from "react";
import "./ColorOfTheMonth.css";

const ColorOfTheMonth = () => {
  return (
    <div className="cotm-wrapper">
      <div className="cotm-content-wrapper">
        <div className="cotm-content-container">
            <img src="/assets/cotm-img.png" alt="" />
        </div>
      </div>
      <div className="cotm-order"></div>
    </div>
  );
};

export default ColorOfTheMonth;
