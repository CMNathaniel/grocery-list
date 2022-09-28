import React, { useState, useSyncExternalStore } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';

const INITIAL_STATE = [
    {
        name: "",
        quantity: null,
    }
];

export default function App() {
  const [groceryItems, setGroceryItems] = useState(INITIAL_STATE);

  // when the user types anything in the grocery item or quantity form fields
  const handleChange = (event) => {  
    event.preventDefault();
  };

  // when the user enters food name and quanitity in the form and submits via button
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const updateGroceryItems = [
      ...groceryItems,
      // {
      //   id: groceryItems.length + 1,
      //   name: "Pickles",
      //   quantity: 4
      // }
      {
        [event.target.id]: groceryItems.length + 1,
        name: "Pickles",
        quantity: 4
      }
    ];
    setGroceryItems(updateGroceryItems);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stine's Grocery List ☑ 
        </h1>
        <img src={groceryimage} className="App-logo" alt="logo" />
      </header>
      <main>

        {/* formerly the component GroceryItemForm */}
        <form className="form" onSubmit={handleSubmit} >
          <div className="form-control">
              <label htmlFor="foodItem"></label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="grocery item"
                  value={groceryItems.name}
                  onChange={handleChange}
              />
              <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="quantity"
                  value={groceryItems.quantity}
                  onChange={handleChange}
              />
          </div>
          <button type="submit">Add to List</button>
        </form>
      
        {/* formerly the component GroceryItemList */}
        <div className="grocery-list">
          <h2>My Grocery List</h2> 
          <h3>Total Items: {groceryItems.length-1}</h3>  
          {/* {displayGroceryItems()}  */}

          <ul>
            {groceryItems.map((groceryItem) => (
              <div key={groceryItem.id}>
                  <li className="grocery-item">
                    {groceryItem.name} {groceryItem.quantity}
                  </li>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};