import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default class CatImage extends Component {
  constructor(props) {
    super(props);
    this.catCaretLeft = this.catCaretLeft.bind(this);
    this.catCaretRight = this.catCaretRight.bind(this);
  }

  catCaretLeft() {
    console.log("left caret clicked");
    /* on click of the caret, the image needs to be conditionally rendered to show 
    the next cat picture */
  }
  catCaretRight() {
    console.log("right caret clicked");
    /* on click of the caret, the image needs to be conditionally rendered to show 
    the next cat picture */
  }

  render() {
    const firstCat = this.props.cats[0];
    const image = firstCat["imageURL"];
    const description = firstCat["description"];

    return (
      <div className="container">
        <div className="row">
          <div className="col-2 my-auto">
            <button
              type="button"
              className="btn btn-primary btn-sm caret"
              onClick={this.catCaretLeft}
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
              onClick={this.catCaretRight}
            >
              <FontAwesomeIcon icon={faCaretRight} className="caret-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
