import React from "react";
import Clue from "./Clue.jsx"

const Category = (props) => {
  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle">{props.category.title}</div>
      {props.category.clues.map(item=>(
      <Clue key={item.id} clue={item} {...props}/>
      ))}
      
    </div>
  );
};

export default Category;
