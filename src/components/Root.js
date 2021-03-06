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
    name: {
      value: "",
      changed: false,
    },
    adopters: [],
    cats: [],
    dogs: [],
    adopterError: null,
    catError: null,
    dogError: null,
  };

  componentDidMount() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/people`, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ adopters: responseJSON }))
      .catch((err) => this.setState({ adopterError: err }));

    this.setPersonInterval();
  }

  dequeuePerson = () => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/people`, requestOptions)
      .then((response) => response.json())
      .then((json) => this.setState({ adopters: json }))
      .catch((err) => this.setState({ adopterError: err }));
  };

  dequeueCat = () => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
      .then((response) => response.json())
      .then((json) => this.setState({ cats: json }))
      .catch((err) => this.setState({ catError: err }));
  };

  dequeueDog = () => {
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/dogs`, requestOptions)
      .then((response) => response.json())
      .then((json) => this.setState({ dogs: json }))
      .catch((err) => this.setState({ dogError: err }));
  };

  handleGetCats = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/cats`, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ cats: responseJSON }))
      .catch((err) => this.setState({ catError: err }));
  };

  handleGetDogs = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${config.REACT_APP_PORT_URL}/api/dogs`, requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => this.setState({ dogs: responseJSON }))
      .catch((err) => this.setState({ dogError: err }));
  };

  handleOnChange = (name) => {
    this.setState({
      name: { value: name, changed: true },
    });
  };

  setPersonInterval = () => {
    setInterval(() => {
      this.dequeuePerson();
    }, 5000);
  };

  setCatInterval = () => {
    setInterval(() => {
      console.log("cat adopted!");
      this.dequeueCat();
      this.handleGetCats();
    }, 5000);
  };

  setDogInterval = () => {
    setInterval(() => {
      console.log("dog adopted!");
      this.dequeueDog();
      this.handleGetDogs();
    }, 5000);
  };

  stopSetIntervals() {
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  }

  render() {
    const value = {
      name: this.state.name.value,
      changed: this.state.name.changed,
      adopters: this.state.adopters,
      cats: this.state.cats,
      dogs: this.state.dogs,
      adopterError: this.state.adopterError,
      catError: this.state.catError,
      dogError: this.state.dogError,
      dequeuePerson: this.dequeuePerson,
      dequeueCat: this.dequeueCat,
      dequeueDog: this.dequeueDog,
      handleGetCats: this.handleGetCats,
      handleGetDogs: this.handleGetDogs,
      handleOnChange: this.handleOnChange,
      setPersonInterval: this.setPersonInterval,
      setCatInterval: this.setCatInterval,
      setDogInterval: this.setDogInterval,
      stopSetIntervals: this.stopSetIntervals,
      startSetIntervals: this.startSetIntervals,
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
