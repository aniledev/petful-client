import React, { Component } from "react";

class LandingForm extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center input mb-5 pb-5">
        <input
          class="form-control form-control-lg name-input mb-2"
          type="text"
          placeholder="Enter your name to join the queue"
          aria-label="Enter your name to join the queue"
          min="3"
          max="100"
          required
        />
      </div>
    );
  }
}

export default LandingForm;
