import React, { Component } from "react";
import CatHeading from "./CatHeading";
import CatImage from "./CatImage";
import CatInfo from "./CatInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
// import config from "../../config";
import context from "../../context";

export default class Cat extends Component {
  // initialize state to hold fetch data for cats
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

  // // write a function that triggers setInterval to dequeue a cat and also handlesGetCats to update the state
  // interval() {
  //   this.context.setCatInterval();
  //   // this.context.setCatInterval(() => {
  //   //   console.log("cat adopted!");
  //   //   this.context.dequeueCat();
  //   //   this.context.handleGetCats();
  //   // }, 5000);
  // }

  handleClick() {
    // update clicked state
    this.handleClickState();
    this.context.dequeuePerson();
    // when the event listener triggers it needs to trigger the DELETE request deletes the first animal from the queue
    this.context.dequeueCat();
    // once the first animal is deleted, state needs to be updated again using a GET request to api/cat
    this.context.handleGetCats();
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
  }

  /* add a conditional rendering that will disable the adopt button 
  if it is not the users turn in the queue*/

  // create a variable to hold this.context.name (the name from the landing form)
  // create a variable to hold the this.context.adopters[0]
  // create a function firstInLine(){}
  // if (this.context.name !== this.context.adopters[0]){return true} else return false
  // create disabled attribute for button element

  checkFirstInLineDisable() {
    const userName = this.context.name.trim();
    const frontOfQueue = this.context.adopters;
    // console.log(userName);
    // console.log(frontOfQueue[0]);
    if (userName !== frontOfQueue[0]) {
      return true;
    } else {
      this.context.stopSetIntervals();
      return false;
    }
  }

  stopDequeueing() {
    const userName = this.context.name.trim();
    const frontOfQueue = this.context.adopters;
    console.log(userName);
    console.log(frontOfQueue[0]);
    if (userName === frontOfQueue[0]) {
      this.context.stopSetIntervals();
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

// add prop types for the props that are passed down
