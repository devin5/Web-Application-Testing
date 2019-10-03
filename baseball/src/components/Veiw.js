import React from "react";
import Buttons from "./Buttons";

const Veiw = props => {
  return (
    <div className="veiw">
      <div className="App">
        <h1>{props.team}</h1>
        <h3> strikes {props.stateStrike}</h3>
        <h3> hits {props.stateHits}</h3>
        <h3>Outs {props.stateOut}</h3>
        <h3> Balls {props.stateBall}</h3>
        <h3> runs {props.stateRuns}</h3>
        <Buttons strike={props.strike} ball={props.ball} />
      </div>
    </div>
  );
};

export default Veiw;
