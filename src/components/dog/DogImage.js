import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default class DogImage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-2 my-auto">
            <button type="button" class="btn btn-primary btn-sm caret">
              <FontAwesomeIcon icon={faCaretLeft} className="caret-left" />
            </button>
          </div>
          <div class="col-8">
            <img
              src="https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="A smiling golden-brown golden retriever listening to
                    music"
            />
          </div>
          <div class="col-2 my-auto">
            <button type="button" class="btn btn-primary btn-sm caret">
              <FontAwesomeIcon icon={faCaretRight} className="caret-right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
