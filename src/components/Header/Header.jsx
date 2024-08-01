import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
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

  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };
  }, []);

  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = 102;
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

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

  const calculateTotalPrice = (item) => {
    return (item.newPrice * item.quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.newPrice * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="header-wrapper" id="myHeader">
      <div className="header-container">
        <img className="header-logo-image" src="/assets/logo.png" alt="" />
        <div className="header-right">
          <ul className="header-menu">
            <li>
              <NavLink to="/">
                <div>
                  <a>HOME</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <div>
                  <a>ALL PRODUCTS</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/product-category/tshirts/">
                <div>
                  <a>TSHIRTS</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/product-category/mugs/">
                <div>
                  <a>MUGS</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-hdx/">
                <div>
                  <a>ABOUT HDX</a>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact/">
                <div>
                  <a>CONTACT</a>
                </div>
              </NavLink>
            </li>
            <li>
              <div>
                <a>
                  ACCOUNT
                  <img src="/assets/down-arrow.png" />
                </a>
              </div>
              <ul className="account-options">
                <NavLink to="/login/">
                  <li>
                    <a>MY ACCOUNT</a>
                  </li>
                </NavLink>
                <NavLink to="/cart/">
                  <li>
                    <a>CART</a>
                  </li>
                </NavLink>
              </ul>
            </li>
          </ul>
          <div className="header-cart" onClick={toggleCart}>
            ₹0.00
            <div className="cart-icon">
              <img src="/assets/shopping-cart.png" />
              <div className="items-count">0</div>
            </div>
          </div>
          {cartOpen && (
            <div
              className={`cart-drawer-background ${cartOpen ? "open" : ""}`}
              onClick={toggleCart}
            ></div>
          )}
          <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
            <div className="cart-header">
              <span>Shopping Cart</span>
              <img src="/assets/close.png" alt="" onClick={toggleCart} />
            </div>
            {cartItems && (
              <ul className="items-added">
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-cart-info">
                      <div>
                        <span className="item-name">{item.name}</span>
                        <img src="/assets/close-circle.png" alt="" />
                      </div>
                      <div>
                        <div className="quantity-change">
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
                        <span className="item-total">
                          £{calculateTotalPrice(item)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="cart-footer">
              <div className="sub-total">
                <span>Subtotal:</span>
                <span>£{calculateSubtotal()}</span>
              </div>
              <div className="buttons">
                <a href="" className="button-one">
                  VIEW CART
                </a>
                <a href="" className="button-one">
                  CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
