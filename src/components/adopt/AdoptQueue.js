import React, { Component } from "react";
import STORE from "../../dummy-store";

export default class AdoptQueue extends Component {
  render() {
    function queue() {
      const adopters = STORE.people;
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
      <div class="text-center adoption-queue mb-5">
        <p>Next in line: {queue()}</p>
      </div>
    );
  }
}
