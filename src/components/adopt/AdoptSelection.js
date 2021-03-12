import React, { Component } from "react";
import "../../styles/adopt-view.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
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
