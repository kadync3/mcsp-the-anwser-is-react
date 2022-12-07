import React from "react";
import Category from "./Category.jsx" 

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map(item=>(
       
          <Category key={item.id} category={item} {...props}/>
        
       
        
        ))}
    </div>
  );
};

export default Categories;
