import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <img className="header-logo-image" src="/assets/logo.png" alt="" />
        <div className="header-right">
          <ul className="header-menu">
            <li><div><a>HOME</a></div></li>
            <li><div><a>ALL PRODUCTS</a></div></li>
            <li><div><a>TSHIRTS</a></div></li>
            <li><div><a>MUGS</a></div></li>
            <li><div><a>ABOUT HDX</a></div></li>
            <li><div><a>CONTACT</a></div></li>
            <li>
              <div><a>ACCOUNT<img src="/assets/down-arrow.png" /></a></div>
              <ul className="account-options">
                <li><a>MY ACCOUNT</a></li>
                <li><a>CART</a></li>
              </ul>
            </li>
          </ul>
          <div className="header-cart">
            ₹0.00
            <div className="cart-icon">
              <img src="/assets/shopping-basket.png" />
              <div className="items-count">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
