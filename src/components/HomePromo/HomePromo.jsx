import React from "react";
import "./HomePromo.css";
import { NavLink } from "react-router-dom";

const HomePromo = () => {
  return (
    <div className="home-promo-wrapper">
      <div className="home-promo-container">
        <div className="home-promo-row">
          <div
            className="home-promo-kind-one"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-1.jpg"
              })`,
            }}
          >
            <p>Best quality printed tshirts and mugs for all your needs</p>
          </div>
          <div
            className="home-promo-kind-two"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-2.jpg"
              })`,
            }}
          ></div>
          <div
            className="home-promo-kind-three"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-3.jpg"
              })`,
            }}
          >
            <div className="home-promo-content-kind-one">
              <h3 className="home-promo-heading-kind-one">
                Get Printed T-shirt @ $25!
              </h3>
              <div className="home-promo-button">
                <NavLink className="button-one" to="/shop">
                  EXPLORE STORE
                  <img src="/assets/double-right.png" />
                </NavLink>
              </div>
            </div>
            <div className="home-promo-action"></div>
          </div>
        </div>
        <div className="home-promo-row">
          <div
            className="home-promo-kind-four"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-4.jpg"
              })`,
            }}
          >
            <div className="home-promo-content-kind-two">
              <h5 className="home-promo-heading-kind-two">
                Get Printed Mug @ $15!
              </h5>
              <div className="home-promo-button">
                <NavLink className="button-one" to="/shop">
                  VISIT STORE
                  <img src="/assets/double-right.png" />
                </NavLink>
              </div>
            </div>
          </div>
          <div
            className="home-promo-kind-five"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-5.jpg"
              })`,
            }}
          ></div>
          <div
            className="home-promo-kind-two"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/home-promo-image-6.jpg"
              })`,
            }}
          ></div>
          <div className="home-promo-kind-four">
            <div className="home-promo-content-kind-three">
              <img src="/assets/plus-icon.png" alt="" />
              <h6 className="home-promo-heading-kind-three">Get Your Own</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePromo;
