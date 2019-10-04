import React from "react";
import { render } from "@testing-library/react";
import Buttons from "./Buttons.js";

describe("<Buttons />", () => {
  it("renders without crashing", () => {
    render(<Buttons />);
  });
  it("displays button strike", () => {
    const display = render(<Buttons />);
    display.getByText(/Strike/);
  });
  it("displays button strike", () => {
    const display = render(<Buttons />);
    display.getByText(/Ball/);
  });
  it("displays button strike", () => {
    const display = render(<Buttons />);
    display.getByText(/Foul/);
  });
  it("displays button strike", () => {
    const display = render(<Buttons />);
    display.getByText(/Hit/);
  });
  it("displays button out", () => {
    const display = render(<Buttons />);
    display.getByText(/out/);
  });
});
