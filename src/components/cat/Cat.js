import React, { Component } from "react";
import CatHeading from "./CatHeading";
import CatImage from "./CatImage";
import CatInfo from "./CatInfo";
import config from "../../config";

export default class Cat extends Component {
  // initialize state to hold fetch data for cats
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleGetCats = this.handleGetCats.bind(this);
    this.dequeueCat = this.dequeueCat.bind(this);
  }

  componentDidMount() {
    /* when the component is mounted, immediately preform a GET 
    request to /api/cats 
       to receive cat image and cat info */
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ cats: responseJSON }))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  dequeueCat() {
    //use a DELETE HTTP request to the heroku server and dequeue a cat
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  handleClick() {
    // when the button is clicked, an event listener needs to listen for the click
    console.log("button clicked!");
    // when the event listener triggers it needs to trigger the DELETE request deletes the first animal from the queue
    this.dequeueCat();
    // once the first animal is deleted, state needs to be updated again using a GET request to api/cat
    this.handleGetCats();
  }

  // add a timeout method that adopts a dog every 5 seconds
  /* add a conditional rendering that will disable the adopt button 
  if it is not the users turn in the queue*/

  render() {
    const { cats } = this.state;
    // console.log(cats);
    /* figure out how to access these props for the children 
    components*/
    return (
      <div className="col-md text-center">
        <CatHeading cats={cats} />
        <CatImage cats={cats} />
        <CatInfo cats={cats} />
        <div className="mb-5">
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
