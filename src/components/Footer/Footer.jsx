import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About HDX</a>
          </li>
          <li>
            <a href="">My account</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Tshirts</a>
          </li>
          <li>
            <a href="">Mugs</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div></div>
        <div className="social-icons">
          <ul>
            <li>
              <a href="">
                <img src="/assets/facebook.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/instagram.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/google.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/assets/youtube.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-other-container">
        <div className="footer-other">
          <p>Copyright © 2024 Custom Printing Pro</p>
          <p>Powered by Custom Printing Pro</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
