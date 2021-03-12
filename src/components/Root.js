import React, { Component } from "react";
import "./Root.css";

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <div className="overlay">
          <h1>FIFO Pet Adoption</h1>
          <p>
            Welcome to the FIFO Pet adoption website! Here at FIFO we believe
            that each pet should have a chance at their furever home. This
            vision inspired us to create the first and premier FIFO pet adopton
            service. This means that the first pet to come to the shelter is the
            first cat or dog that gets adopted.
          </p>
          <p>
            To join the queue of adopters, click the buttton below. When it's
            your chance to adopt, get ready to take your furbaby home!
          </p>
        </div>
      </div>
    );
  }
}

export default Root;
