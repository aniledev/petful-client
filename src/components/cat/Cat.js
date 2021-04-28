import React, { Component } from "react";
import CatHeading from "./CatHeading";
import CatImage from "./CatImage";
import CatInfo from "./CatInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
import context from "../../context";

export default class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  static contextType = context;

  componentDidMount() {
    this.context.handleGetCats();
    this.context.setCatInterval();
  }

  handleClick() {
    this.handleClickState();
    this.context.dequeuePerson();
    this.context.dequeueCat();
    this.context.handleGetCats();
    // FOR SOME REASON THIS TIMEOUT FUNCTION IS NOT BEING CALLED AND THE STATE IS NOT UPDATING, MEANING THAT THE CONFIRMATION MESSAGE NEVER GOES AWAY AND THE BUTTONS DO NO DISABLE ANYMORE
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
    const { cats } = this.context;

    if (cats.length === 0) {
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
        <CatHeading cats={cats} />
        <CatImage cats={cats} />
        <CatInfo cats={cats} />
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
