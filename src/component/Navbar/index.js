import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light">
      <div className="navbar-header d-flex col">
        <a className="navbar-brand" href="#">
          S & S FoodHub
        </a>
        <button
          type="button"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          className="navbar-toggle navbar-toggler ml-auto"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      {/* <!-- Collection of nav links, forms, and other content for toggling --> */}
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              data-toggle="dropdown"
              className="nav-link dropdown-toggle"
              href="#"
            >
              Services <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#" className="dropdown-item">
                  Caterers
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Chefs
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Nutrionists
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  Foodies
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item active">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            <span className="input-group-addon">
              <i className=" fa fa-search"></i>
            </span>
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li className="nav-item">
            <a
              data-toggle="dropdown"
              className="nav-link dropdown-toggle"
              href="#"
            >
              Login
            </a>
            <ul className="dropdown-menu form-wrapper">
              <li>
                <form action="/examples/actions/confirmation.php" method="post">
                  <p className="hint-text">
                    Sign in with your social media account
                  </p>
                  <div className="form-group social-btn clearfix">
                    <a href="#" className="btn btn-primary pull-left">
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                    <a href="#" className="btn btn-info pull-right">
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </div>
                  <div className="or-seperator">
                    <b>or</b>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Login"
                  />
                  <div className="form-footer">
                    <a href="#">Forgot Your password?</a>
                  </div>
                </form>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#"
              data-toggle="dropdown"
              className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1"
            >
              Sign up
            </a>
            <ul className="dropdown-menu form-wrapper">
              <li>
                <form action="/examples/actions/confirmation.php" method="post">
                  <p className="hint-text">
                    Fill in this form to create your account!
                  </p>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <label className="checkbox-inline">
                      <input type="checkbox" required="required" /> I accept the{" "}
                      <a href="#">Terms &amp; Conditions</a>
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block"
                    value="Sign up"
                  />
                </form>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
