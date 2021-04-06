import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PetsView from "../pages/PetsView";
import AdoptView from "../pages/AdoptView";
import AboutView from "../pages/AboutView";
import ContactView from "../pages/ContactView";
import LandingView from "../pages/LandingView";
import NotFoundView from "../pages/NotFoundView";
import context from "../context";
import config from "../config";

export default class Root extends Component {
  state = {
    adopters: [],
    error: null,
  };

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/people`, requestOptions)
      // use chained promises to receive the data from the server
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ adopters: responseJSON }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const value = {
      adopters: this.state.adopters,
      error: this.state.error,
      dequeuePerson: this.dequeuePerson,
    };

    return (
      <context.Provider value={value}>
        <div className="Root">
          <Switch>
            <Route exact path="/pets" component={PetsView} />
            <Route exact path="/adopt" component={AdoptView} />
            <Route exact path="/about" component={AboutView} />
            <Route exact path="/contact" component={ContactView} />
            <Route exact path="/" component={LandingView} />
            <Route component={NotFoundView} />
          </Switch>
        </div>
      </context.Provider>
    );
  }
}
