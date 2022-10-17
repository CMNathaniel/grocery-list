import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';
import GroceryItemForm from './GroceryItemForm.js';
import GroceryItemList from './GroceryItemForm.js';


const App = () => {
  // hook with initial empty array groceryItems.name we'll use to populate the list of grocery items 
  const [groceryItems, setGroceryItems] = useState({
    name: []
  });
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Stine's Grocery List ☑ 
        </h1>
        <img src={groceryimage} className="app-logo" alt="logo" />
      </header>
      <main>
        <GroceryItemForm setGroceryItems={setGroceryItems}/>
        <GroceryItemList groceryItems={groceryItems}/>
      </main>
    </div>
  );
}

export default App;