import React, { Component } from "react";
import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
import config from "../../config";

export default class Dog extends Component {
  // initialize state to hold fetch data for dogs
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      error: null,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleGetDogs = this.handleGetDogs.bind(this);
    this.dequeueDog = this.dequeueDog.bind(this);
  }

  componentDidMount() {
    this.handleGetDogs();
    this.interval();
  }

  // write a function that triggers setInterval to dequeue a cat and also handlesGetCats to update the state
  interval() {
    setInterval(() => {
      console.log("dog adopted!");
      this.dequeueDog();
      this.handleGetDogs();
    }, 5000);
  }

  handleGetDogs() {
    /* when the component is mounted, immediately preform a GET request to /api/cats 
       to receive cat image and cat info */

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/dogs`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ dogs: responseJSON }))
      .catch((err) => this.setState({ error: err }));
  }

  dequeueDog() {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/dogs`, requestOptions)
      .then((response) => response.json())
      .then((json) => this.setState({ dogs: json }))
      .catch((err) => this.setState({ error: err }));
  }

  handleClick() {
    // update clicked state
    this.handleClickState();
    // function needs to trigger a DELETE request using the server
    this.dequeueDog();
    // once the cat/dog is dequeued, it also needs to update the state with the new set of cats and dogs
    this.handleGetDogs();
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 3000);
  }

  /* add a conditional rendering that will disable the adopt button if 
  it is not the users turn in the queue*/

  handleClickState() {
    this.setState({ clicked: true });
  }

  confirmAdoption() {
    const clicked = this.state.clicked;
    if (clicked === true) {
      return "You're now a proud pet parent!";
    }
  }

  render() {
    const { dogs } = this.state;

    if (dogs.length === 0) {
      return <p className="col-md text-center">Loading Information</p>;
    }

    const clicked = this.state.clicked;
    const message = this.confirmAdoption();
    let confirmationMessage;
    if (clicked) {
      confirmationMessage = <AdoptionConfirmation message={message} />;
    } else {
      confirmationMessage = <></>;
    }

    return (
      <div className="col-md text-center">
        <DogHeading dogs={dogs} />
        <DogImage dogs={dogs} />
        <DogInfo dogs={dogs} />
        <div className="mb-5">
          {confirmationMessage}
          <button
            type="button"
            className="btn adopt-button"
            onClick={this.handleClick}
          >
            Adopt!
          </button>
        </div>
      </div>
    );
  }
}

// add prop types for the props that are passed down
