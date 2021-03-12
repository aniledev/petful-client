import React, { Component } from "react";
import "../../styles/adopt-view.css";
import Cat from "../cat/Cat";
import Dog from "../dog/Dog";

export default class AdoptSelection extends Component {
  render() {
    return (
      <div class="container mb-4">
        <div class="row">
          <Cat />
          <Dog />
        </div>
      </div>
    );
  }
}
