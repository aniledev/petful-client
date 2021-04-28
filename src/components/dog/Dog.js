import React, { Component } from "react";
import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
import context from "../../context";

export default class Dog extends Component {
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

  handleClick() {
    this.handleClickState();
    this.context.dequeuePerson();
    this.context.dequeueDog();
    this.context.handleGetDogs();

    setTimeout(() => {
      this.setState({ clicked: false });
    }, 3000);
  }

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
