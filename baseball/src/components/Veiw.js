import React from "react";
import Buttons from "./Buttons";

const Veiw = props => {
  return (
    <div>
      <h1 data-testid="veiwTeamTest" className="heading">
        {props.team}
      </h1>
      <h1 data-testid="veiwRuns" className="heading">
        {props.stateRuns}
      </h1>
      <div className="wrap">
        hi
        <h3 data-testid="veiwStrike">strikes {props.stateStrike}</h3>
        <h3 data-testid="veiwHits">hits {props.stateHits}</h3>
        <h3 data-testid="veiwOuts">Outs {props.stateOut}</h3>
        <h3 data-testid="veiwBalls">Balls {props.stateBall}</h3>
      </div>
      <div data-testid="buttonsDivs" className="buttons">
        <Buttons
          hit={props.hit}
          foul={props.foul}
          strike={props.strike}
          ball={props.ball}
          out={props.out}
        />
      </div>
    </div>
  );
};

export default Veiw;
