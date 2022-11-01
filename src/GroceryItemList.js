import React from "react";
import './App.css';

 
const GroceryItemList = ({groceryItems}) => {

  return (
    <div className="grocery-list">
      {/* map method iterates through the array groceryItems.name and creates each as a "ul" element 
      unique key required for each child so we are using "data" + index of the item */}
      <div>
        {groceryItems.name.map((data, i) => (
          <ul key={'data_' + i}>{data}</ul>
        ))}
      </div>
    </div> 
  );
}

export default GroceryItemList;