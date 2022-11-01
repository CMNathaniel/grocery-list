import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';
import GroceryItemForm from './GroceryItemForm.js';
import GroceryItemList from './GroceryItemForm.js';


const App = () => {
  // hook with initial empty array state groceryItems.name 
  // we'll use this to populate the list of grocery items 
  // grocery items = array ?
  // setGroceryItems = function ?
  const [groceryItems, setGroceryItems] = useState({
    name: []
  });

  // callback function to pass user typed data "onChange" from form into groceryItems
  const updateGroceryItem = (event) => {
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
          <GroceryItemForm setGroceryItems={groceryItems} updateGroceryItem={updateGroceryItem}/>
          <GroceryItemList setGroceryItems={groceryItems}/>
        </main>
      </div>
  );
}

export default App;