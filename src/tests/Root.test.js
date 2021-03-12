import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Root from "../components/Root.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Root />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
