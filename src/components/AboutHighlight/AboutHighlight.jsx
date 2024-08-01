import React from "react";
import "./AboutHighlight.css";

const AboutHighlight = () => {
  return (
    <div
      className="about-highlight-wrapper"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/about-highlight-img.jpg"
        })`,
      }}
    >
      <div className="about-highlight-overlay"></div>
      <div className="about-highlight-container">
        <div className="about-highlight-content">
          <div className="ahc-left">
            <h3>Tshirt Printing Is The New Cool!</h3>
            <p>
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non numquam eius modi tempora
              incidunt lores ta porro ame.
            </p>
            <div className="explore-now">
              <a href="" className="button-one">
                EXPLORE NOW
                <img src="/assets/double-right.png" alt="" />
              </a>
            </div>
          </div>
          <div className="ahc-right"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHighlight;
