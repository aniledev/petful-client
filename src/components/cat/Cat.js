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

    fetch(`${config}/api/cats`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // use this.setState to update state with response data
  }

  render() {
    return (
      <div class="col-md text-center">
        <CatHeading />
        <CatImage />
        {/* once this.state.cats is updated, pass down description and imageUrl to CatImage component */}
        <CatInfo />
        {/* once this.state.cats is updated, pass down age, breed, gender, name and story to CatImage component */}
        <div class="mb-5">
          <button type="button" class="btn adopt-button">
            Adopt Cat!
          </button>
        </div>
      </div>
    );
  }
}
