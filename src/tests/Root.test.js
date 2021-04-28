import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "../components/Root.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Root />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
