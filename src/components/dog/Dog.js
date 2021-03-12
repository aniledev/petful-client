import React, { Component } from "react";

import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";

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

    fetch(`${config}/api/dogs`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  }

  render() {
    return (
      <div class="col-md text-center">
        <DogHeading />
        {/* once this.state.dogs is updated, pass down description and imageUrl to dogImage component */}
        <DogImage />
        {/* once this.state.dogs is updated, pass down age, breed, gender, name and story to dogImage component */}
        <DogInfo />
        <div class="mb-5">
          <button type="button" class="btn adopt-button">
            Adopt Dog!
          </button>
        </div>
      </div>
    );
  }
}
