import React, { Component } from "react";
import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
// import config from "../../config";
import context from "../../context";

export default class Dog extends Component {
  // initialize state to hold fetch data for dogs
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static contextType = context;

  componentDidMount() {
    this.context.handleGetDogs();
    this.context.setDogInterval();
  }

  // // write a function that triggers setInterval to dequeue a cat and also handlesGetCats to update the state
  // interval() {
  //   this.context.setDogInterval();
  //   //   setInterval(() => {
  //   //     console.log("dog adopted!");
  //   //     this.context.dequeueDog();
  //   //     this.context.handleGetDogs();
  //   //   }, 5000);
  // }

  handleClick() {
    // update clicked state
    this.handleClickState();
    // function needs to trigger a DELETE request using the server
    this.context.dequeueDog();
    // once the cat/dog is dequeued, it also needs to update the state with the new set of cats and dogs
    this.context.handleGetDogs();
    // FOR SOME REASON THIS TIMEOUT FUNCTION IS NOT BEING CALLED AND THE STATE IS NOT UPDATING, MEANING THAT THE CONFIRMATION MESSAGE NEVER GOES AWAY AND THE BUTTONS DO NO DISABLE ANYMORE
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
    if (!clicked) {
      return;
    }
  }

  /* add a conditional rendering that will disable the adopt button 
  if it is not the users turn in the queue*/

  checkFirstInLineDisable() {
    const userName = this.context.name.trim();
    const frontOfQueue = this.context.adopters;
    if (userName !== frontOfQueue[0]) {
      return true;
    } else {
      this.context.stopSetIntervals();
      return false;
    }
  }

  render() {
    const { dogs } = this.context;

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
            disabled={this.checkFirstInLineDisable()}
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
