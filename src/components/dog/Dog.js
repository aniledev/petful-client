import React, { Component } from "react";
import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";
import config from "../../config";
export default class Dog extends Component {
  // initialize state to hold fetch data for dogs
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    /* when the component is mounted, immediately preform a GET request to /api/cats 
       to receive cat image and cat info */

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.PORT_URL}/api/dogs`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ dogs: responseJSON }))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  }

  // add a timeout method that adopts a dog every 5 seconds
  /* add a conditional rendering that will disable the adopt button if 
  it is not the users turn in the queue*/

  render() {
    return (
      <div className="col-md text-center">
        <DogHeading dogs={this.state.dogs} />
        <DogImage dogs={this.state.dogs} />
        <DogInfo dogs={this.state.dogs} />
        <div className="mb-5">
          {/* add event handler to button to trigger DELETE /api/dogs dequeue 
          a dog, this also will update the state*/}
          <button type="button" className="btn adopt-button">
            Adopt!
          </button>
        </div>
      </div>
    );
  }
}

// add prop types for the props that are passed down
