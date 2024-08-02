import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [quantities, setQuantities] = useState({});
  var productDetail = {
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
  };

  const handleQuantityChange = (productIndex, delta) => {
    setQuantities((prevQuantities) => {
      const category = categories[categoryIndex];
      const newQuantities = { ...prevQuantities };
      newQuantities[category] = newQuantities[category] || {};
      console.log(
        "handleQuantityChange" + newQuantities[category][productIndex]
      );
      newQuantities[category][productIndex] =
        (newQuantities[category][productIndex] || 1) + delta;
      if (newQuantities[category][productIndex] < 1) {
        newQuantities[category][productIndex] = 1;
      }
      return newQuantities;
    });
  };

  const handleAddToCart = (productIndex) => {
    const category = categories[categoryIndex];
    const quantity = quantities[category]?.[productIndex] || 1;
    if (quantity < 1 || !Number.isInteger(quantity)) {
      alert("Quantity must be a natural number");
      return;
    }
    document.getElementById(
      `check-img-${category}-${productIndex}`
    ).style.display = "inline-block";
  };

  return (
    <div className="product-detail-wrapper">
      <div className="quick-view">
        <div className="product-image-container">
          <img src={productDetail.image} alt={productDetail.name} />
          {product.sale && <div className="sale">Sale!</div>}
        </div>
        <div className="product-info">
          <a href="#">
            <h5>{productDetail.name}</h5>
          </a>
          <span className="price">
            {productDetail.oldPrice && <del>{productDetail.oldPrice}</del>}
            <ins> {productDetail.newPrice}</ins>
          </span>
          <p className="description">{productDetail.description}</p>
          <form action="" className="cart">
            <div className="quantity">
              <span
                className="minus"
                onClick={() => handleQuantityChange(index, -1)}
              >
                -
              </span>
              <input
                type="number"
                value={quantities[categories[categoryIndex]]?.[index] || 1}
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
              <a
                href="#"
                className="button-one"
                onClick={() => handleAddToCart(index)}
              >
                ADD TO CART
                <img
                  src="/assets/check.png"
                  alt=""
                  id={`check-img-${categories[categoryIndex]}-${index}`}
                  style={{ display: "none" }}
                />
              </a>
            </div>
          </form>
          <p className="category-name">
            Category: <a>{product.categoryName}</a>
          </p>
          {product.extrasHeading && (
            <p className="extras-heading">{product.extrasHeading}</p>
          )}
          {product.extras && (
            <ul>
              {product.extras.map((extra, idx) => (
                <li key={idx}>
                  <img src="/assets/check-circle.png" alt="" />
                  {extra}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
