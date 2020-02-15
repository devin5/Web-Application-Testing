import React from "react";

const Buttons = props => {
  return (
    <div>
      <button data-testid = "strikeButton" onClick={props.strike}>Strike</button>
      <button onClick={props.ball}>Ball</button>
      <button onClick={props.foul}>Foul</button>
      <button onClick={props.hit}>hit</button>
      <button onClick={props.out}>out</button>
    </div>
  );
};

export default Buttons;
