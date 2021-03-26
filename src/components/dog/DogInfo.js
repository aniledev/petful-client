import React, { Component } from "react";

export default class DogInfo extends Component {
  render() {
    const firstDog = this.props.dogs[0];
    const name = firstDog["name"];
    const age = firstDog["age"];
    const sex = firstDog["gender"];
    const breed = firstDog["breed"];
    const story = firstDog["story"];

    return (
      <div className="mt-3">
        <p>Name: {name}</p>
        <p>Sex: {sex}</p>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Story: {story}</p>
      </div>
    );
  }
}
