import React, { Component } from "react";
import config from "../../config";
import context from "../../context";
import ValidationError from "../ValidationError";

class LandingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        changed: false,
      },
    };
  }

  static contextType = context;

  handleOnChange(name) {
    this.context.handleOnChange(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNameToQueue();
    this.props.history.push("/adopt");
  }

  validateUserInput() {
    const name = this.context.name.trim();
    if (!name) {
      return "A name is required.";
    }
    if (name.length < 3) {
      return "Name must be at least 3 characters.";
    }
    if (name.length > 100) {
      return "Name must not exceed 100 characters.";
    }
  }

  addNameToQueue() {
    const name = this.context.name.trim();

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
      .then((response) => response.json())
      .then((responseJSON) => console.log(responseJSON))
      .catch((error) => console.log("error", error));
  }

  render() {
    const nameInputError = this.validateUserInput();

    return (
      <form
        className="justify-content-center input mb-5 pb-5"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <div className="d-flex justify-content-center">
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
        </div>
        {this.context.changed && <ValidationError message={nameInputError} />}
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="submit-button btn btn-danger"
            disabled={this.validateUserInput()}
          >
            Join Queue
          </button>
        </div>
      </form>
    );
  }
}

export default LandingForm;
