import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, getByTestId } from "@testing-library/react";

describe("app ", () => {
  it("app renders without crashing", () => {
    render(<App />);
  });

});
