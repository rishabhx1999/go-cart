import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-hdx/">About HDX</NavLink>
          </li>
          <li>
            <NavLink>My account</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/product-category/tshirts/">Tshirts</NavLink>
          </li>
          <li>
            <NavLink to="/product-category/mugs/">Mugs</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
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
