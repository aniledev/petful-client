import React, { Component } from "react";

import DogHeading from "./DogHeading";
import DogImage from "./DogImage";
import DogInfo from "./DogInfo";

export default class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

    };
  }
  render() {
    return (
      <div class="col-md text-center">
        <DogHeading />

        <DogImage />

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
