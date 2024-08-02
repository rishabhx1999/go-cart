import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      image: "/assets/fp-tshirts-1.jpg",
      name: "Printed Blue Tshirt",
      newPrice: 27.0,
      quantity: 4,
    },
    {
      image: "/assets/fp-tshirts-2.jpg",
      name: "Printed Green Tshirt",
      newPrice: 32.0,
      quantity: 2,
    },
  ]);

  const [showCoupon, setShowCoupon] = useState(false);

  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.newPrice * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h5>Cart</h5>
        <div className="cart-main">
          <table className="cart-items">
            <thead>
              <tr>
                <th className="remove-product"></th>
                <th className="product-image"></th>
                <th className="product-name">Product</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="remove-product">
                    <img src="/assets/close-circle.png" alt="Remove" />
                  </td>
                  <td className="product-image">
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td className="product-name">{item.name}</td>
                  <td className="product-price">${item.newPrice.toFixed(2)}</td>
                  <td className="product-quantity">
                    <div>
                      <span
                        className="minus"
                        onClick={() => decrementQuantity(index)}
                      >
                        -
                      </span>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        readOnly
                      />
                      <span
                        className="plus"
                        onClick={() => incrementQuantity(index)}
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td className="product-subtotal">
                    ${(item.newPrice * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <h6>Cart totals</h6>
            <table>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>${total.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            {!showCoupon && (
              <p onClick={() => setShowCoupon(true)}>Have a coupon?</p>
            )}
            {showCoupon && (
              <div className="coupon">
                <input type="text" placeholder="Coupon Code" />
                <a href="" className="button-one">
                  APPLY
                </a>
              </div>
            )}
            <div className="button-one">PROCEED TO CHECKOUT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
