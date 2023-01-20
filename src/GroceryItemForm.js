import React from "react";
import './App.css';


const GroceryItemForm = ({groceryItems, setGroceryItems, handleChange, addNewGroceryItem}) => {
  
  // user clicks Add button
  // callback function (event handler) to user submitted data "onSubmit" from form <GroceryItemForm /> into groceryItems array
  const handleSubmit = (event) => {
    
    // form field starts with empty string until user types something

    // prevents page refresh
    event.preventDefault();
    console.log(`this is groceryitems before addNewGroceryItem ` + groceryItems);
    // console.log(`This is groceryItems before setGroceryItems` , {groceryItems});


    addNewGroceryItem();


    
    // setGroceryItems(groceryItem => (
    //   // ...groceryItem spreads any existing items in our array while preserving original data
    //   { 
    //     ...groceryItem
    //   }
    // ));

    // setGroceryItems((groceryItems) => (
    //   [
    //   ...groceryItems
    //   ]
    // ));

    // setGroceryItems((prevContact) => [...prevContact, groceryItems]);


    // console.log(`This is groceryItems after setGroceryItems `, {groceryItems});

  
    // we return the form to an empty state afterwards 
    // setGroceryItems("");
  };

  console.log({groceryItems});

  return (      
    <form className="form" onSubmit={e => { handleSubmit(e) } }>
      <div className="form-control">
        <label htmlFor="foodItem"></label>
        <input
          type="text"
          id="name"
          name="grocery item"
          placeholder="cheese"
          value={groceryItems}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default GroceryItemForm;