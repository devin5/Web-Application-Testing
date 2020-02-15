import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Veiw from "./Veiw.js";

describe("<Veiw />", () => {
  it("renders without crashing", () => {
    render(<Veiw />);
  });
  test("team test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwTeamTest");
  });
  test("button div id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("buttonsDivs");
  });
  test("runs test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwRuns");
  });
  test("strikes test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwStrike");
  });
  test("hits test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwHits");
  });
  test("Outs test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwOuts");
  });
  test("Outs test id renders", () => {
    const display = render(<Veiw />);
    display.getByTestId("veiwBalls");
  });
  it("renders team props", () => {
    const display = render(<Veiw team={"redsox"} />);
    display.getByText(/redsox/); //);
  });
  it("renders runs props", () => {
    const display = render(<Veiw stateRuns={6} />);
    display.getByText(/6/); //);
  });
  it("renders strike props", () => {
    const display = render(<Veiw stateStrike={2} />);
    display.getByText(/strikes 2/); //);
  });
  it("renders hits props", () => {
    const display = render(<Veiw stateHits={10} />);
    display.getByText(/hits 10/); //);
  });
  it("renders outs props", () => {
    const display = render(<Veiw stateOut={1} />);
    display.getByText(/Outs 1/); //);
  });

  it("renders balls props", () => {
    const display = render(<Veiw stateBall={3} />);
    display.getByText(/Balls 3/); //);
  });
  it("component is dumb", () => {
    const display = render(
      <Veiw
        stateBall={800}
        stateOut={700}
        stateHits={600}
        stateStrike={500}
        stateRuns={400}
        team={300}
      />
    );
    display.getByText(/300/);
    display.getByText(/400/);
    display.getByText(/500/);
    display.getByText(/600/);
    display.getByText(/700/);
    display.getByText(/800/);
  });

  it("strike increments by one", () => {
    const { getByText } = render(<Veiw stateStrike={0} />);
    const strikeButton = getByText(/Strike/);
    getByText(/strikes 0/);
    fireEvent.click(strikeButton);
    // getByText(/strikes 1/);
  });
});
