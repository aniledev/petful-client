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
            <img
              src="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="A smiling golden-brown golden retriever listening to
                    music"
            />
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
