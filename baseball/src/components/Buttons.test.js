import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Buttons from "./Buttons.js";

describe("<Buttons />", () => {
  it("renders without crashing", () => {
    render(<Buttons />);
  });
  it("displays button strike", () => {
    const display = render(<Buttons />);
    display.getByText(/Strike/);
  });
  it("displays button Ball", () => {
    const display = render(<Buttons />);
    display.getByText(/Ball/);
  });
  it("displays button Foul", () => {
    const display = render(<Buttons />);
    display.getByText(/Foul/);
  });
  it("displays button hit", () => {
    const display = render(<Buttons />);
    display.getByText(/hit/);
  });
  it("displays button out", () => {
    const display = render(<Buttons />);
    display.getByText(/out/);
  });
  it("strike button fires", () => {
    const display = render(<Buttons strike={() => console.log("strike")} />);
    const strikeButton = display.getByText(/Strike/);
    fireEvent.click(strikeButton);
  });
  it("strike button fires", () => {
    let clicked = false
    const display = render(<Buttons strike={() => clicked = true} />);
    const strikeButton = display.getByText(/Strike/);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true)
  });
  it("strike button fires", () => {
    let clicked = false
    const {getByText} = render(<Buttons strike={() => clicked = true} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true)
  });
  it("strike button fires", () => {
    let click = jest.fn()
    const {getByText} = render(<Buttons strike={click} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled()
  });
});
