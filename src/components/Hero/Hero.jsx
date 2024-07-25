import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-heading">Customized Printed Tees</h1>
          <p className="hero-paragraph">
            Nam at congue diam etiam erat lectus, finibus eget commodo quis,
            congue diam etiam erat lectus.
          </p>
          <div className="hero-explore-store-container">
            <a className="hero-explore-store" href="#">
              EXPLORE STORE
              <img src="/assets/double-right.png" />
            </a>
          </div>
        </div>
        <img className="hero-image" src="/assets/boy.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
