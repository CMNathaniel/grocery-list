import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';


export default function App() {
  // hook with initial empty array groceryItems.name we'll use to populate the list of grocery items
  const [groceryItems, setGroceryItems] = useState({
    name: []
  });

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
    <div className="app">
      <header className="app-header">
        <h1>
          Stine's Grocery List ☑ 
        </h1>
        <img src={groceryimage} className="app-logo" alt="logo" />
      </header>
      <main>
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
        <div className="grocery-list">
          {/* map method iterates through the array groceryItems.name and creates each as a "ul" element 
          unique key required for each child so we are using "data" + index of the item */}
          <div>
            {groceryItems.name.map((data, i) => (
              <ul key={'data_' + i}>{data}</ul>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};