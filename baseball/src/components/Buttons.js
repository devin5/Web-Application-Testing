import React from "react";

const Buttons = props => {
  return (
    <div>
      <button onClick={props.strike}>Strike</button>
      <button onClick={props.ball}>Ball</button>
    </div>
  );
};

export default Buttons;
