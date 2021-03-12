import React, { Component } from "react";
import STORE from "../../dummy-store";
import PORT_URL from "../../config";

export default class AdoptQueue extends Component {
  componentDidMount() {
    /* when the component is mounted, immediately preform a GET request to /api/people 
       to receive adopters in the queue*/

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${PORT_URL}/api/people`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    // use this.setState to update this.state.people with response data
  }

  // add a timeout method that adopts a pet every 5 seconds, dequeue a person every 5sec

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
