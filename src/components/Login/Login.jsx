import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h5>My account</h5>
        <div className="login-main">
          <h3>Login</h3>
          <form action="" className="login-form">
            <div className="email">
              <label htmlFor="email">
                Username or email address<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address*"
              />
            </div>
            <div className="password">
              <label htmlFor="password">
                Username or email address<span>*</span>
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password*"
              />
              <img
                src="/assets/password-eye.png"
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="remember-me">
              <input type="checkbox" id="" name="remember" value="remember" />
              <label for="remember">Remember me</label>
            </div>
            <a href="" className="button-one">
              LOG IN
            </a>
            <a>Lost your password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
