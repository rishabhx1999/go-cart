import React, { useState } from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Tshirts", "Mugs"];
  const products = {
    Tshirts: [
      {
        image: "/assets/fp-tshirts-1.jpg",
        sale: true,
        categoryName: "Tshirts",
        name: "Printed Blue Tshirt",
        rating: 4,
        oldPrice: "£35.00",
        newPrice: "£27.00",
      },
      {
        image: "/assets/fp-tshirts-2.jpg",
        sale: true,
        categoryName: "Tshirts",
        name: "Printed Green Tshirt",
        rating: 5,
        oldPrice: "£34.00",
        newPrice: "£32.00",
      },
      {
        image: "/assets/fp-tshirts-3.jpg",
        sale: true,
        categoryName: "Tshirts",
        name: "Printed Maroon Tshirt",
        rating: 4,
        oldPrice: "£34.00",
        newPrice: "£32.00",
      },
      {
        image: "/assets/fp-tshirts-4.jpg",
        sale: true,
        categoryName: "Tshirts",
        name: "Printed Orange Tshirt",
        rating: 5,
        oldPrice: "£34.00",
        newPrice: "£25.00",
      },
    ],
    Mugs: [
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
    ],
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="featured-products-wrapper">
      <div className="featured-products-container">
        <h3>Featured Products</h3>
        <ul className="featured-products-categories">
          {categories.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="products-list">
          {products[categories[activeIndex]].map((product, index) => (
            <li key={index}>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
                <div className="quick-view-button">Quick View</div>
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

              <div className="quick-view-background">
                <div className="loader"></div>
              </div>

              <div className="quick-view-container">
                <div className="quick-view"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProducts;
