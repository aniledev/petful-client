import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="nav-bar-left">
            <a class="navbar-brand brand-title" href="/index.html">
              First Come First Served Pet Adoption
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            class="collapse navbar-collapse flex-row-reverse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link" href="/features.html">
                Home
              </a>
              <a class="nav-link" href="/about.html">
                About
              </a>
              <a class="nav-link" href="/about.html">
                Pets
              </a>
              <a class="nav-link" href="/contact.html">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
