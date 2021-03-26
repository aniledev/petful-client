import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default class DogImage extends Component {
  constructor(props) {
    super(props);
    this.dogCaretLeft = this.dogCaretLeft.bind(this);
    this.dogCaretRight = this.dogCaretRight.bind(this);
  }

  dogCaretLeft() {
    console.log("left caret clicked");
    /* on click of the caret, the image needs to be conditionally rendered to show 
    the next cat picture */
  }
  dogCaretRight() {
    console.log("right caret clicked");
    /* on click of the caret, the image needs to be conditionally rendered to show 
    the next cat picture */
  }

  render() {
    const firstDog = this.props.dogs[0];
    const image = firstDog["imageURL"];
    const description = firstDog["description"];

    return (
      <div className="container">
        <div className="row">
          <div className="col-2 my-auto">
            <button
              type="button"
              className="btn btn-primary btn-sm caret"
              onClick={this.dogCaretLeft}
            >
              <FontAwesomeIcon icon={faCaretLeft} className="caret-left" />
            </button>
          </div>
          <div className="col-8">
            <img src={image} alt={description} />
          </div>
          <div className="col-2 my-auto">
            <button
              type="button"
              className="btn btn-primary btn-sm caret"
              onClick={this.dogCaretRight}
            >
              <FontAwesomeIcon icon={faCaretRight} className="caret-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
