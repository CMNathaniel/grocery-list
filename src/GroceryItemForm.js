import React, { useState } from "react";
import './App.css';
 

const GroceryItemForm = setGroceryItems => {
    // hook for adding user inputted data from form into the groceryItems.name array. 
    // form field starts with empty string until user types something 
    const [newGroceryItem, setNewGroceryItem] = useState("");

    // callback function to pass user typed data "onChange" from form into newGroceryItem
    const updateNewGroceryItem = (event) => {
        setNewGroceryItem(event.target.value);
    };

    // callback function to user submitted data "onSubmit" from form into groceryItems.name array
    // prevents page refresh, then spreads any existing items in our array, plus adds the newGroceryItem
    const addGroceryItem = (event) => {
        event.preventDefault();
        setGroceryItems(groceryItem => (
        {
        ...groceryItem,
        name: [...groceryItem.name, newGroceryItem]
        }
        ));
        // we return the form to an empty state afterwards 
        setNewGroceryItem("");
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
                  value={newGroceryItem}
                  onChange={updateNewGroceryItem}
              />
              <button type="submit">Add</button>
          </div>
        </form>
    );
}


export default GroceryItemForm;