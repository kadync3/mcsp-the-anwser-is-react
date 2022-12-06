import React from "react";
import Category from "./Category.jsx" 

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map(item=>(
       
          <Category category={item}/>
        
       
        
        ))}
    </div>
  );
};

export default Categories;
