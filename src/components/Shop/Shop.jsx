import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <div className="shop-container">
        <div className="shop-toolbar">
          <div className="shop-toolbar-left">
            <a href="" className="button-one">
              <img src="/assets/menu-not-round-bar.png" alt="" />
              FILTER
            </a>
            <p>Showing 11 results</p>
          </div>
          <form class="select-sort">
            <select>
              <option value="menu_order" selected="selected">
                Default sorting
              </option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="date">Sort by latest</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shop;
