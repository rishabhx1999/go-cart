import React, { useState } from "react";
import "./Shop.css";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [quickViewIndex, setQuickViewIndex] = useState(null);
  const [quantities, setQuantities] = useState({});

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleQuickViewClick = (index) => {
    setQuickViewIndex(index);
  };

  const handleQuickViewClose = () => {
    setQuickViewIndex(null);
  };

  const handleQuantityChange = (productIndex, delta) => {
    setQuantities((prevQuantities) => {
      let newQuantities = { ...prevQuantities };
      newQuantities[productIndex] = (newQuantities[productIndex] || 1) + delta;
      if (newQuantities[productIndex] < 1) {
        newQuantities[productIndex] = 1;
      }
      return newQuantities;
    });
  };

  const handleAddToCart = (productIndex) => {
    const quantity = quantities[productIndex] || 1;
    if (quantity < 1 || !Number.isInteger(quantity)) {
      alert("Quantity must be a natural number");
      return;
    }
    document.getElementById(`check-img-${productIndex}`).style.display =
      "inline-block";
  };

  const products = [
    {
      image: "/assets/fp-tshirts-1.jpg",
      sale: true,
      categoryName: "Tshirts",
      name: "Printed Blue Tshirt",
      rating: 4,
      oldPrice: "£35.00",
      newPrice: "£27.00",
      description:
        "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
      extrasHeading: "Free shipping on orders over $50!",
      extras: [
        "No-Risk Money Back Guarantee!",
        "No Hassle Refunds",
        "Secure Payments",
      ],
    },
    {
      image: "/assets/fp-tshirts-2.jpg",
      sale: true,
      categoryName: "Tshirts",
      name: "Printed Green Tshirt",
      rating: 5,
      oldPrice: "£34.00",
      newPrice: "£32.00",
      description:
        "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
      extrasHeading: "Free shipping on orders over $50!",
      extras: [
        "No-Risk Money Back Guarantee!",
        "No Hassle Refunds",
        "Secure Payments",
      ],
    },
    {
      image: "/assets/fp-tshirts-3.jpg",
      sale: true,
      categoryName: "Tshirts",
      name: "Printed Maroon Tshirt",
      rating: 4,
      oldPrice: "£34.00",
      newPrice: "£32.00",
      description:
        "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
      extrasHeading: "Free shipping on orders over $50!",
      extras: [
        "No-Risk Money Back Guarantee!",
        "No Hassle Refunds",
        "Secure Payments",
      ],
    },
    {
      image: "/assets/fp-tshirts-4.jpg",
      sale: true,
      categoryName: "Tshirts",
      name: "Printed Orange Tshirt",
      rating: 5,
      oldPrice: "£34.00",
      newPrice: "£25.00",
      description:
        "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
      extrasHeading: "Free shipping on orders over $50!",
      extras: [
        "No-Risk Money Back Guarantee!",
        "No Hassle Refunds",
        "Secure Payments",
      ],
    },
    {
      image: "/assets/fp-mugs-1.jpg",
      sale: false,
      categoryName: "Mugs",
      name: "Black Printed Coffee Mug",
      rating: 4,
      oldPrice: null,
      newPrice: "£15.00",
    },
    {
      image: "/assets/fp-mugs-2.jpg",
      sale: false,
      categoryName: "Mugs",
      name: "Father's Day Coffee Mug",
      rating: 5,
      oldPrice: null,
      newPrice: "£19.00",
    },
    {
      image: "/assets/fp-mugs-3.jpg",
      sale: false,
      categoryName: "Mugs",
      name: "Personalised Mug",
      rating: 5,
      oldPrice: null,
      newPrice: "£15.00",
    },
    {
      image: "/assets/fp-mugs-4.jpg",
      sale: false,
      categoryName: "Mugs",
      name: "Valentine's Day Special Mug",
      rating: 3,
      oldPrice: null,
      newPrice: "£19.00",
    },
  ];

  const handleNavLinkClick = () => {
    setFilterOpen(false);
  };

  return (
    <div className="shop-wrapper">
      <div className="shop-container">
        <div className="shop-toolbar">
          <div className="shop-toolbar-left">
            <a className="button-one" onClick={toggleFilter}>
              <img src="/assets/menu-not-round-bar.png" alt="" />
              FILTER
            </a>
            <p>Showing 11 results</p>
          </div>
          <form className="select-sort">
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
        <ul className="products-list">
          {products.map((product, index) => (
            <NavLink to="/product/">
              <li key={index}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
                  <div
                    className="quick-view-button"
                    onClick={() => handleQuickViewClick(index)}
                  >
                    Quick View
                  </div>
                </div>
                {product.sale && <div className="sale">Sale!</div>}
                <span className="category-name">{product.categoryName}</span>
                <h6>{product.name}</h6>
                <div className="rating-container">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <img
                      src={
                        idx < product.rating
                          ? "/assets/rating-fill.png"
                          : "/assets/rating-empty.png"
                      }
                      alt="rating"
                      key={idx}
                    />
                  ))}
                </div>
                <span className="price">
                  {product.oldPrice && <del>{product.oldPrice}</del>}
                  <ins> {product.newPrice}</ins>
                </span>

                {quickViewIndex === index && (
                  <>
                    <div
                      className="quick-view-background"
                      onClick={() => handleQuickViewClose(index)}
                    >
                      <div className="loader"></div>
                    </div>

                    <div className="quick-view-wrapper">
                      <div className="quick-view-container">
                        <div className="quick-view">
                          <div className="product-image-container">
                            <img src={product.image} alt={product.name} />
                            {product.sale && <div className="sale">Sale!</div>}
                          </div>
                          <div className="product-info">
                            <a href="#">
                              <h5>{product.name}</h5>
                            </a>
                            <span className="price">
                              {product.oldPrice && (
                                <del>{product.oldPrice}</del>
                              )}
                              <ins> {product.newPrice}</ins>
                            </span>
                            <p className="description">{product.description}</p>
                            <form action="" className="cart">
                              <div className="quantity">
                                <span
                                  className="minus"
                                  onClick={() =>
                                    handleQuantityChange(index, -1)
                                  }
                                >
                                  -
                                </span>
                                <input
                                  type="number"
                                  value={quantities[index] || 1}
                                  min="1"
                                  readOnly
                                />
                                <span
                                  className="plus"
                                  onClick={() => handleQuantityChange(index, 1)}
                                >
                                  +
                                </span>
                              </div>
                              <div className="add-to-cart">
                                <button
                                  className="button-one"
                                  onClick={() => handleAddToCart(index)}
                                >
                                  ADD TO CART
                                  <img
                                    src="/assets/check.png"
                                    alt=""
                                    id={`check-img-${index}`}
                                    style={{ display: "none" }}
                                  />
                                </button>
                              </div>
                            </form>
                            <p className="category-name">
                              Category: <a>{product.categoryName}</a>
                            </p>
                            {product.extrasHeading && (
                              <p className="extras-heading">
                                {product.extrasHeading}
                              </p>
                            )}
                            {product.extras && (
                              <ul>
                                {product.extras.map((extra, idx) => (
                                  <li key={idx}>
                                    <img
                                      src="/assets/check-circle.png"
                                      alt=""
                                    />
                                    {extra}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className="close"
                        onClick={() => handleQuickViewClose(index)}
                      >
                        <img src="/assets/close.png" alt="" />
                      </div>
                    </div>
                  </>
                )}
              </li>
            </NavLink>
          ))}
        </ul>
        <a href="" className="load-more">
          Load More
        </a>
        {filterOpen && (
          <div
            className={`filter-drawer-background ${filterOpen ? "open" : ""}`}
            onClick={toggleFilter}
          ></div>
        )}
        <div className={`filter-drawer ${filterOpen ? "open" : ""}`}>
          <div className="filter-header">
            <div></div>
            <img src="/assets/close.png" alt="" onClick={toggleFilter} />
          </div>
          <div className="filter-main">
            <div className="product-categories">
              <h6>Product categories</h6>
              <ul>
                <li>
                  <NavLink
                    to="/product-category/mugs/"
                    onClick={handleNavLinkClick}
                  >
                    Mugs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/product-category/tshirts/"
                    onClick={handleNavLinkClick}
                  >
                    Tshirts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={handleNavLinkClick}>
                    Uncategorized
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="filter-by-price">
              <h6>Filter by price</h6>
              <div className="range-slider">
                <div className="range-slider-button"></div>
                <div className="range-slider-button"></div>
              </div>
              <div className="filter-and-price">
                <a className="button-one">FILTER</a>
                <span>
                  Price: <span>£10-£40</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
