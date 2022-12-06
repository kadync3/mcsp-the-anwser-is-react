import React from "react";
import Categories from "./Categories.jsx"

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.currentQuestion.question ? "question" : "gameboard"}
    >This is my Game board
      <Categories {...props}/>
      
      {/* No? Show Categories */}
    </div>
  );
};

export default Gameboard;
