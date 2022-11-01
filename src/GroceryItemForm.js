import React from "react";
import './App.css';

// might delete the below 
// hook for adding user inputted data from form into the groceryItems.name array. 
// form field starts with empty string until user types something
// const [newGroceryItem, setNewGroceryItem] = useState("");


const GroceryItemForm = ({groceryItems, setGroceryItems, updateGroceryItem}) => {
  // callback function to user submitted data "onSubmit" from form <GroceryItemForm /> into groceryItems.name array
  const addGroceryItem = (event) => {
    // prevents page refresh
    event.preventDefault();
    // spreads any existing items in our array
    setGroceryItems(groceryItem => (
    {
    ...groceryItem,
    // and also adds the new groceryItem submitted by the user
    name: [...groceryItem.name, groceryItems]
    }
    ));
    // we return the form to an empty state afterwards 
    setGroceryItems("");
    // console.log(typeof(addGroceryItem));
  };

  return (      
    <form className="form" onSubmit={addGroceryItem} >
      <div className="form-control">
        <label htmlFor="foodItem"></label>
        <input
          type="text"
          id="name"
          name="grocery item"
          placeholder="pickles"
          value={groceryItems}
          onChange={updateGroceryItem}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default GroceryItemForm;