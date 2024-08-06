import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const productDetail = {
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

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + delta;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleAddToCart = () => {
    if (quantity < 1 || !Number.isInteger(quantity)) {
      alert("Quantity must be a natural number");
      return;
    }
    document.getElementById(`check-img`).style.display = "inline-block";
  };

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <div className="product-main-info">
          <div className="product-image-container">
            <img src={productDetail.image} alt={productDetail.name} />
            {productDetail.sale && <div className="sale">Sale!</div>}
          </div>
          <div>
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
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </span>
                <input type="number" value={quantity} min="1" readOnly />
                <span className="plus" onClick={() => handleQuantityChange(1)}>
                  +
                </span>
              </div>
              <div className="add-to-cart">
                <a href="#" className="button-one" onClick={handleAddToCart}>
                  ADD TO CART
                  <img
                    src="/assets/check.png"
                    alt=""
                    id="check-img"
                    style={{ display: "none" }}
                  />
                </a>
              </div>
            </form>
            <p className="category-name">
              Category: <a>{productDetail.categoryName}</a>
            </p>
            {productDetail.extrasHeading && (
              <p className="extras-heading">{productDetail.extrasHeading}</p>
            )}
            {productDetail.extras && (
              <ul>
                {productDetail.extras.map((extra, idx) => (
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
    </div>
  );
};

export default ProductDetail;
