import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="nav-bar-left">
            <a className="navbar-brand brand-title" href="/">
              First Come First Served Pet Adoption
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
