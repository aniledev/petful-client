import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Root.css";
import PetsView from "../pages/PetsView";
import AdoptView from "../pages/AdoptView";
import AboutView from "../pages/AboutView";
import ContactView from "../pages/ContactView";
import LandingView from "../pages/LandingView";
import NotFoundView from "../pages/NotFoundView";

export default class App extends Component {
  render() {
    return (
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
    );
  }
}
