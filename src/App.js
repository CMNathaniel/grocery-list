import React, { useState } from 'react';
// import GroceryItemForm from "./GroceryItemForm";
// import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';

const INITIAL_STATE = [
    {
        name: "",
        quantity: null,
    }
];

export default function App() {
  // might need to change useState to useReducer
  // do I need to change updateGroceryItems to setGroceryItems??
  const [groceryItems, updateGroceryItems] = useState(INITIAL_STATE);


  // when the user types anything in the grocery item or quantity form fields
  const handleChange = (event) => {  
    event.preventDefault();
  };

  // when the user clicks the Add to List button
  const handleSubmit = (event) => {
    event.preventDefault();
    updateGroceryItems({
      ...groceryItems, 
      [event.target.id]: event.target.value,
    });   
    // updateGroceryItems([
    //   {
    //     name: "smoothie",
    //     quantity: 2,
    //   },
    //   {
    //     name: "pickles",
    //     quantity: 7,
    //   },
    // ]);
    console.log(groceryItems);
    console.log(typeof(groceryItems));
  };

  // const displayGroceryItems = () => groceryItems.map((groceryItem) => 
  //       <div key={groceryItem.name}>
  //         <ul>
  //           <li className="grocery-item">{groceryItem.name} {groceryItem.quantity}</li>
  //         </ul>
  //       </div>
  // );

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
          <button type="submit">Add to List</button>
        </form>
      
        {/* formerly the component GroceryItemList */}
        <div className="grocery-list">
          <h2>My Grocery List</h2> 
          <h3>Total Items: {groceryItems.length}</h3>  
          {/* {displayGroceryItems()}  */}

          <ul>
            {groceryItems.map((groceryItem) => (
              <div key={groceryItem.name}>
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