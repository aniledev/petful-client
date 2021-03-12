import React, { Component } from "react";

export default class DogInfo extends Component {
  render() {
    return (
      <div className="mt-3">
        <p>Name: Zim</p>
        <p>Sex: Male</p>
        <p>Age: 3</p>
        <p>Breed: Golden Retriever</p>
        <p>Story: Owner passed away</p>
      </div>
    );
  }
}
