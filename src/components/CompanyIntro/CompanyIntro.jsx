import React from "react";
import "./CompanyIntro.css";

const CompanyIntro = () => {
  return (
    <div
      className="company-intro-wrapper"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/hpt-img-1.jpg"
        })`,
      }}
    >
      <div className="company-intro-overlay"></div>
      <div className="company-intro-container">
        <div className="company-intro-content">
          <h6>- Since 1984 -</h6>
          <h1>
            We Provide Best-quality Printed Products At Affordable Prices.
          </h1>
          <a href="" className="button-one">
            EXPLORE MORE
            <img src="/assets/double-right.png" alt="" />
          </a>
          <div className="separation"></div>
          <div>
            <div className="company-intro-para">
              <h5>Who We Are</h5>
              <p>
                Qui dolore ipsum quia dolor sit amet, consectetur adipisci
                velit, sed quia non numquam eius modi tempora incidunt lor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
