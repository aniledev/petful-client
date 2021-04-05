import React, { Component } from "react";
import config from "../../config";

class LandingForm extends Component {
  // initialize state to hold controlled form components
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        changed: false,
      },
    };
  }

  // create an onChange of the input box update this.state.name
  handleOnChange(name) {
    this.setState({
      name: { value: name, changed: true },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNameToQueue();
    this.props.history.push("/adopt");
  }

  // write method to validate the input box
  validateUserInput() {
    const name = this.state.name.value.trim();
    // if name is not entered, return "A name is required"
    // if name.length < 3, return "Name must be at least 3 characters"
    // if name.length > 100, return "Name must not exceed 100 characters"
  }

  // write method that uses the POST/api/people to add the name to the list of adopters
  addNameToQueue() {
    const name = this.state.name.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const nameJSON = JSON.stringify({
      name: name,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: nameJSON,
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/people`, requestOptions)
      // use chained promises to post the data to the server, no data is received from this POST
      .then((response) => response.json())
      .then((responseJSON) => console.log(responseJSON))
      .catch((error) => console.log("error", error));
    // clear this.state.name once the POST request is successful
  }

  render() {
    const nameInputError = this.validateUserInput();

    return (
      <form
        className="d-flex justify-content-center input mb-5 pb-5"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input
          className="form-control form-control-lg name-input mb-2"
          type="text"
          placeholder="Enter your name to join the queue"
          aria-label="Enter your name to join the queue"
          min="3"
          max="100"
          required
          onChange={(e) => this.handleOnChange(e.target.value)}
        />
        {this.state.name.changed && (
          <ValidationError message={nameInputError} />
        )}
        {/* add JSX button element with type, className, and disabled attributes this.validateUserInput() */}
        <button
          type="submit"
          className="submit-button"
          disabled={this.validateUserInput()}
        >
          Join Queue
        </button>
      </form>
    );
  }
}

export default LandingForm;
