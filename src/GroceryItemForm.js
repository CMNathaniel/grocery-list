import React from "react";
import './App.css';


const GroceryItemForm = ({groceryItems, handleChange, setGroceryItems, addNewGroceryItem}) => {
  
  // user clicks Add button
  // callback function (event handler) to user submitted data "onSubmit" from form <GroceryItemForm /> into groceryItems array
  const handleSubmit = (event) => {
    // prevents page refresh
    event.preventDefault();

    console.log(`this is groceryItems before addNewGroceryItem ` + groceryItems);

    addNewGroceryItem();

    console.log(`this is groceryItems after addNewGroceryItem ` + groceryItems);
  
    // we return the form to an empty state afterwards 
    // setGroceryItems("");
  };


  return (      
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="foodItem"></label>
        <input
          type="text"
          id="name"
          name="grocery item"
          placeholder="cheese"
          value={groceryItems}
          // onChange={handleChange}
          onChange={e => setGroceryItems(e.target.value)}

        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default GroceryItemForm;