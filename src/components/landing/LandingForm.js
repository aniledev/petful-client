import React, { Component } from "react";

class LandingForm extends Component {
  // initialize state to hold controlled form components
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  // create an onChange of the input box update this.state.name
  handleInputChange() {
    // on change of event, this.setState with value from the input box
    // trigger the addNameToQueue method to send this.state.name to the server to add to queue
  }

  // write method to validate the input box
  validateName() {
    // name cannot be empty upon submission
    // name must contain at least 3 characters
    // name cannot contain more than 100 characters
    // use the validateName function to disable submission of the form
  }
  render() {
    return (
      <div className="d-flex justify-content-center input mb-5 pb-5">
        <input
          className="form-control form-control-lg name-input mb-2"
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
