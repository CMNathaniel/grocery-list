import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';
import GroceryItemForm from './GroceryItemForm.js';
import GroceryItemList from './GroceryItemList.js';


const App = () => {
 
  // hook with initial empty array state groceryItems 
  // we'll use this to populate the list of grocery items 
  const [groceryItems, setGroceryItems] = useState([]);

  // groceryItems.map((item, idx))// [1,2,3]

  // callback function to pass user typed data "onChange" from form into groceryItems
  const handleChange = (event) => {
    // when a user types something into the form, the setGroceryItems hook 
    // updates the groceryItems array with their input
    setGroceryItems(event.target.value);
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
          {/* these are the two children components */}
          <GroceryItemForm groceryItems={groceryItems} setGroceryItems={setGroceryItems} handleChange={handleChange}/>
          <GroceryItemList groceryItems={groceryItems}/>
        </main>
      </div>
  );
}

export default App;