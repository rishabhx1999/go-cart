import React from "react";
import "./OurProducts.css";
import { NavLink } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className="our-products-wrapper">
      <div className="our-products-content">
        <div className="opc-left">
          <div className="shopping-basket">
            <img src="/assets/shopping-basket.png" alt="" />
          </div>
          <h3>Best Quality Printed Tshirts And Mugs Very Affordable Price</h3>
          <div className="catalog">
            <ul>
              <li>Personal Gifts</li>
              <li>Occasional Gifts</li>
              <li>Corporate Gifts</li>
            </ul>
            <ul>
              <li>Printed Tshirts</li>
              <li>Printed Mugs</li>
              <li>Corporate Gifts</li>
            </ul>
          </div>
          <p>
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
        <img src="/assets/home-promo-image-5.jpg" alt="" />
      </div>
      <div className="our-products-action">
        <div className="opa-inner">
          <h3>Get Best Offers On All Products!</h3>
          <div className="visit-store">
            <NavLink to="/shop" className="button-one">
              VISIT STORE
              <img src="/assets/double-right.png" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
