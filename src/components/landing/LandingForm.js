import React, { Component } from "react";
import config from "../../config";

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

  // write method that uses the POST/api/people to add the name to the list of adopters
  addNameToQueue() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const newName = JSON.stringify({
      name: "Elina",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: newName,
      redirect: "follow",
    };

    fetch(`${config.PORT_URL}/api/people`, requestOptions)
      // use chained promises to post the data to the server, no data is received from this POST
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // clear this.state.name once the POST request is successful
  }

  render() {
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
      </form>
    );
  }
}

export default LandingForm;
