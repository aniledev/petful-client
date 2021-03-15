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
  }

  componentDidMount() {
    /* when the component is mounted, immediately preform a GET request to /api/cats 
       to receive cat image and cat info */
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:8000/api/cats`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ cats: responseJSON }))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  }

  // add a timeout method that adopts a dog every 5 seconds
  /* add a conditional rendering that will disable the adopt button if 
  it is not the users turn in the queue*/

  render() {
    return (
      <div className="col-md text-center">
        <CatHeading cats={this.state.cats} />
        <CatImage cats={this.state.cats} />
        <CatInfo cats={this.state.cats} />
        <div className="mb-5">
          {/* add event handler to button to trigger DELETE /api/cats dequeue 
          a cat, this also will update the state*/}
          <button type="button" className="btn adopt-button">
            Adopt!
          </button>
        </div>
      </div>
    );
  }
}

// add prop types for the props that are passed down
