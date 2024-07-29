import React from "react";
import "./IntroVideo.css";

const IntroVideo = () => {
  return (
    <div className="intro-video-wrapper">
      <div
        className="intro-video-container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/video-intro-img.jpg"
          })`,
        }}
      >
        <div className="intro-video-overlay"></div>
        <div className="play-video">
          <img src="/assets/play-circle.png" alt="" />
          <h6>
            Watch
            <br />
            Intro Video
          </h6>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
