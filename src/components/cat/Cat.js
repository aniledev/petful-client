import React, { Component } from "react";

import CatHeading from "./CatHeading";
import CatImage from "./CatImage";
import CatInfo from "./CatInfo";

export default class Cat extends Component {
  render() {
    return (
      <div class="col-md text-center">
        <CatHeading />
        <CatImage />
        <CatInfo />
        <div class="mb-5">
          <button type="button" class="btn adopt-button">
            Adopt Cat!
          </button>
        </div>
      </div>
    );
  }
}
