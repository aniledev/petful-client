import React, { Component } from "react";
import "../styles/landing-view.css";
import Navbar from "../components/navigation/Navbar";

class LandingView extends Component {
  render() {
    return (
      <>
        <Navbar />

        <main class="container-md">
          <div class="d-flex justify-content-center mt-5 mb-5">
            <h1 class="text-center landing-heading display-4">
              Adopt today at First Come First Served Pet Adoption
            </h1>
          </div>
          <div class="d-flex justify-content-center mb-4">
            <p class="subtitle text-center">
              Here at FIFO we believe that each pet should have a chance at
              their furever home. This vision inspired us to create the first
              and premier FIFO pet adoption service. This means that the first
              pet to come to the shelter is the pet that gets adopted.
            </p>
          </div>
          <div class="d-flex justify-content-center mb-4">
            <p class="instructions text-center">
              To join the queue of adopters, enter your name below. When it's
              your chance to adopt, get ready to take your furbaby home!
            </p>
          </div>
          <div class="d-flex justify-content-center input">
            <input
              class="form-control form-control-lg name-input"
              type="text"
              placeholder="Enter your name to join the queue"
              aria-label="Enter your name to join the queue"
              min="3"
              max="100"
              required
            />
          </div>
        </main>

        <footer class="fixed-bottom container-fluid d-flex justify-content-center bg-dark">
          Made with love by @aniledev on GitHub. Hosted with Vercel.
        </footer>
      </>
    );
  }
}

export default LandingView;
