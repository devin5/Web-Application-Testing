import React from "react";
import { render } from "@testing-library/react";
import Veiw from "./Veiw.js";

describe("<Veiw />", () => {
  it("renders without crashing", () => {
    render(<Veiw />);
  });
});
