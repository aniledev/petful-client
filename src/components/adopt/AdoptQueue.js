import React, { Component } from "react";
import context from "../../context";

export default class AdoptQueue extends Component {
  // initialize state to hold fetch data for adopters
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = context;

  componentDidMount() {
    this.context.dequeuePerson();
  }

  render() {
    const { adopters } = this.context;

    function queue() {
      let queue = "";
      for (let i = 0; i < adopters.length; i++) {
        if (i < adopters.length - 1) {
          queue += adopters[i] + ", ";
        } else {
          queue += adopters[i];
        }
      }
      return queue;
    }

    return (
      <div className="text-center adoption-queue mb-5">
        <p>Next in line: {queue()}</p>
      </div>
    );
  }
}
