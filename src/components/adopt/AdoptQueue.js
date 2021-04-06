import React, { Component } from "react";
import config from "../../config";

export default class AdoptQueue extends Component {
  // initialize state to hold fetch data for adopters
  constructor(props) {
    super(props);
    this.state = {
      adopters: [],
      error: null,
    };
  }

  componentDidMount() {
    /* when the component is mounted, immediately preform a GET request to /api/people 
       to receive adopters in the queue*/

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/people`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ adopters: responseJSON }))
      .catch((err) => this.setState({ error: err }));
    // use this.setState to update this.state.adopters with response data
  }

  // add a timeout method that adopts a pet every 5 seconds, dequeue a person every 5sec

  render() {
    const { adopters } = this.state;
    // change queue function to produce JSX elements that create an ordered list of names instead of paragraph of text

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
