import React from "react";
import Buttons from "./Buttons";

const Veiw = props => {
  return (
    <div>
      <h1 className="heading">{props.team}</h1>
      <h1 className="heading">{props.stateRuns}</h1>
      <div className="wrap">
        <h3> strikes {props.stateStrike}</h3>
        <h3> hits {props.stateHits}</h3>
        <h3>Outs {props.stateOut}</h3>
        <h3> Balls {props.stateBall}</h3>
      </div>
      <div className="buttons">
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
