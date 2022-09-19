import React, { useState } from 'react';
// import GroceryItemForm from "./GroceryItemForm";
// import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';

const INITIAL_STATE = [
    {
        name: "",
        quantity:"",
    }
];

export default function App() {
  const [groceryItems, updateGroceryItems] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    updateGroceryItems({
      ...groceryItems, 
      [event.target.id]: event.target.value,
    });   
    event.preventDefault();
    console.log(groceryItems);
  };

  const handleSubmit = (event) => {
    alert('A grocery item and quantity were submitted: ' + this.state.value);
    event.preventDefault();
  };

  // const addGroceryItem = (groceryItems) => {
  //   updateGroceryItems(groceryItems);
  // };

  // const addGroceryItem = (groceryItem) => {
  //   updateGroceryItems([groceryItem]);
  //   // console.log("updateGroceryItems inside addGroceryItem in App.js has run: " , groceryItem);
  // };
  
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
          <button type="submit">Add to list</button>
        </form>
      
        {/* formerly the component GroceryItemList */}
        <div className="grocery-list">
          {/* <p>This area represents the component called GroceryItemList!</p>  */}
          <h3>My Grocery List</h3> 
          <p>Total Items: {groceryItems.length}</p> 
         {/* <p>Here is groceryItems:{groceryItems}</p>  
           {groceryItems.map((groceryItem) => (
              <ul>
                  <li className="card-name">{groceryItem}</li>
              </ul>
          ))}    */}
        </div> 
      </main>
    </div>
  );
};