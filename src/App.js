import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';


export default function App() {
  const [groceryItems, setGroceryItems] = useState({
    name: []
  });

  const [newGroceryItem, setNewGroceryItem] = useState("");

  const updateNewGroceryItem = (event) => {
    setNewGroceryItem(event.target.value);
  };

  const addGroceryItem = (event) => {
    event.preventDefault();
    setGroceryItems(groceryItem => (
      {
      ...groceryItem,
      name: [...groceryItem.name, newGroceryItem]
      }
    ));
    setNewGroceryItem("");
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stine's Grocery List ☑ 
        </h1>
        <img src={groceryimage} className="App-logo" alt="logo" />
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
          </div>
          <button type="submit">Add to List</button>
        </form>
        <div className="grocery-list">
          <div>
            {groceryItems.name.map((data) => (
              <ul key={data}>{data}</ul>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};