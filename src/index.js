import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
