import React from "react";

const Clue = (props) => {
  // show $ value of clue OR
  // the Clue question itself OR
  // empty screen if it was already answered
  console.log(props.category)
  return <div className="clueValue" data-testid="value">${props.clue.value}</div>;
  
};

export default Clue;
