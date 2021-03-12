import React, { Component } from "react";
import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";
import PORT_URL from "../../config";

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

    fetch(`${PORT_URL}/api/dogs`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  }

  // add a timeout method that adopts a dog every 5 seconds
  /* add a conditional rendering that will disable the adopt button if 
  it is not the users turn in the queue*/

  render() {
    return (
      <div class="col-md text-center">
        <DogHeading />
        {/* once this.state.dogs is updated, pass down description and 
        imageUrl to dogImage component */}
        <DogImage />
        {/* once this.state.dogs is updated, pass down age, breed, gender, 
        name and story to dogImage component */}
        <DogInfo />
        <div class="mb-5">
          {/* add event handler to button to trigger DELETE /api/dogs dequeue 
          a dog, this also will update the state*/}
          <button type="button" class="btn adopt-button">
            Adopt!
          </button>
        </div>
      </div>
    );
  }
}
