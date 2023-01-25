import React from "react";
import './App.css';


const GroceryItemForm = ({groceryItems, setGroceryItems}) => {
  
  // user clicks Add button
  // callback function (event handler) to user submitted data "onSubmit" from form <GroceryItemForm /> into groceryItems array
  const handleSubmit = (event) => {
    // prevents page refresh
    event.preventDefault();

    console.log(`handleSubmit: this is groceryItems before addNewGroceryItem ` + groceryItems);
    console.log(`handleSubmit: groceryItems data type before addNewGroceryItem = `, typeof(groceryItems));

    // addNewGroceryItem();

      setGroceryItems(groceryItem => (
        {
        ...groceryItem,
        // name: [...groceryItem.name, groceryItems]
        }
      ));

    console.log(`handleSubmit: this is groceryItems after addNewGroceryItem ` + groceryItems);
    console.log(`handleSubmit: groceryItems data type after addNewGroceryItem = `, typeof(groceryItems));

    // we return the form to an empty state afterwards 
    setGroceryItems("");
  };


  return (      
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="foodItem"></label>
        <input
          type="text"
          id="name"
          name="grocery item"
          placeholder="pickles"
          // is this correct? 
          value={groceryItems}
          // onChange={handleChange}
          onChange={event => setGroceryItems(event.target.value)}

        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default GroceryItemForm;