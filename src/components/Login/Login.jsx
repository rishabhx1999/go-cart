import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h5>My account</h5>
        <div className="login-main">
          <h3>Login</h3>
          <form action="" className="login-form">
            <label htmlFor="email">
              Username or email address<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email address*"
            />{" "}
            <label htmlFor="email">
              Username or email address<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email address*"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
