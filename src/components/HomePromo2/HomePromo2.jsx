import React from "react";
import "./HomePromo2.css";

const HomePromo2 = () => {
  return (
    <div className="hpt-wrapper">
      <div
        className="hpt-left"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/hpt-img-1.jpg"
          })`,
        }}
      >
        <div className="hpt-left-overlay"></div>
      </div>
    </div>
  );
};

export default HomePromo2;
