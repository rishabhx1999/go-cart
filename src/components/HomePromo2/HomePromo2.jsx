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
        <div className="hpt-left-content">
          <h3>Printed Tshirt For $25!</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo.</p>
          <div className="order-now">
            <a href="" className="button-one">
              ORDER NOW
              <img src="/assets/double-right.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div
        className="hpt-right"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/hpt-img-2.jpg"
          })`,
        }}
      >
        <div className="hpt-right-overlay"></div>
        <div className="hpt-right-content">
          <h3>Printed Mug For $15!</h3>
          <p>Nam at congue diam. Etiam erat lectus, finibus eget commodo.</p>
          <div className="explore-designs">
            <a href="" className="button-one">
              EXPLORE DESIGNS
              <img src="/assets/double-right.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePromo2;
