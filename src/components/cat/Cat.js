import React, { Component } from "react";
import CatHeading from "./CatHeading";
import CatImage from "./CatImage";
import CatInfo from "./CatInfo";
import AdoptionConfirmation from "../AdoptionConfirmation";
import config from "../../config";
import context from "../../context";

export default class Cat extends Component {
  // initialize state to hold fetch data for cats
  constructor(props) {
    super(props);
    this.state = {
      // cats: [],
      error: null,
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleGetCats = this.handleGetCats.bind(this);
    this.dequeueCat = this.dequeueCat.bind(this);
  }

  static contextType = context;

  componentDidMount() {
    this.context.handleGetCats();
    this.interval();
  }

  // write a function that triggers setInterval to dequeue a cat and also handlesGetCats to update the state
  interval() {
    setInterval(() => {
      console.log("cat adopted!");
      this.dequeueCat();
      this.context.handleGetCats();
    }, 5000);
  }

  // handleGetCats() {
  //   /* when the component is mounted, immediately preform a GET
  //   request to /api/cats to receive cat image and cat info */
  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
  //     // use chained promises to receive the data from the server
  //     .then((response) => response.json())
  //     .then((responseJSON) => this.setState({ cats: responseJSON }))
  //     .catch((err) => this.setState({ error: err }));
  //   // use this.setState to update state with response data
  // }

  dequeueCat() {
    //use a DELETE HTTP request to the heroku server and dequeue a cat
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
      .then((response) => response.json())
      .then((json) => this.setState({ cats: json }))
      .catch((err) => this.setState({ error: err }));
  }

  handleClick() {
    // update clicked state
    this.handleClickState();
    // when the event listener triggers it needs to trigger the DELETE request deletes the first animal from the queue
    this.dequeueCat();
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
