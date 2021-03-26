import React, { Component } from "react";

export default class CatInfo extends Component {
  render() {
    const firstCat = this.props.cats[0];
    const name = firstCat["name"];
    const age = firstCat["age"];
    const sex = firstCat["gender"];
    const breed = firstCat["breed"];
    const story = firstCat["story"];

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
