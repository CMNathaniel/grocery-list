import React from "react";
import './App.css';


const GroceryItemForm = ({groceryItems, setGroceryItems, updateGroceryItem}) => {
  
  // user clicks Add button
  // callback function (event handler??) to user submitted data "onSubmit" from form <GroceryItemForm /> into groceryItems.name array
  const handleGroceryItem = (event) => {
    // prevents page refresh
    event.preventDefault();
    
    // form field starts with empty string until user types something

    console.log({groceryItems});

    setGroceryItems(groceryItem => (
      // groceryItems.push(['Onions']),
      // groceryItems.push(['Eggs']),
      // groceryItems.push(['Pickles']),

      // spreads any existing items in our array
      { 
        ...groceryItem,
      }
    ));

    console.log({groceryItems});

    // groceryItems.map((item, idx))// [1,2,3]


    // setGroceryItems(groceryItem => (
    // {
    // ...groceryItem,
    // // and also adds the new groceryItem submitted by the user
    // name: [...groceryItem.name, groceryItems]
    // }
    // ));

    // we return the form to an empty state afterwards 
    setGroceryItems("");
  };

  console.log({groceryItems});

  return (      
    <form className="form" onSubmit={handleGroceryItem} >
      <div className="form-control">
        <label htmlFor="foodItem"></label>
        <input
          type="text"
          id="name"
          name="grocery item"
          placeholder="cheese"
          value={groceryItems}
          onChange={updateGroceryItem}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default GroceryItemForm;