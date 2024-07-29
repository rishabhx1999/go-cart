import React, { useState, useEffect } from "react";
import "./ReadyDesigns.css";

const ReadyDesigns = () => {
  const images = [
    "/assets/fp-mugs-1.jpg",
    "/assets/fp-mugs-2.jpg",
    "/assets/fp-mugs-3.jpg",
    "/assets/fp-mugs-4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlur(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setBlur(false);
      }, 500);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ready-designs-wrapper">
      <div className="ready-designs-container">
        <div className="ready-design-content">
          <h3>Hundreds Of Ready Designs To Choose From</h3>
          <p>
            Nam at congue diam etiam erat lectus, finibus eget commodo quis,
            congue diam etiam erat lectus.
          </p>
          <div className="explore-designs">
            <a href="" className="button-one">
              EXPLORE DESIGNS <img src="/assets/double-right.png" alt="" />
            </a>
          </div>
        </div>
        <img
          src={images[currentImageIndex]}
          alt=""
          className={blur ? "blur" : ""}
        />
      </div>
    </div>
  );
};

export default ReadyDesigns;
