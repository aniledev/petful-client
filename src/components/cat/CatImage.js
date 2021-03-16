import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default class CatImage extends Component {
  render() {
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
            <img
              src="https://images.unsplash.com/photo-1598463166261-357c23778812?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80"
              alt="A smiling golden-brown golden retriever listening to music"
            />
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
