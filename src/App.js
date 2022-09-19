import React, { useState } from 'react';
import GroceryItemForm from "./GroceryItemForm";
import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';


const App = () => {

  const [groceryItems, updateGroceryItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit in App.js has run: " , groceryItems);

    //receiving callback handler from the parent component which uses the form data
    addGroceryItem({groceryItems});
    console.log("addGroceryItem in handleSubmit in App.js has run: " , groceryItems);
    // setFoodItem(INITIAL_STATE);
  };

  const addGroceryItem = (groceryItem) => {
    // I believe the ...groceryItems piece will store user input into an array
    console.log("addGroceryItem in App.js has run: " , groceryItems);
    updateGroceryItems([...groceryItems, groceryItem]);
    console.log("updateGroceryItems inside addGroceryItem in App.js has run: groceryItems, contact" , groceryItems, groceryItem);
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
        <GroceryItemForm 
        handleSubmit={handleSubmit} 
        // handleSubmit={this.handleSubmit.bind(this)} 
        addGroceryItem={addGroceryItem} 
        groceryItems={groceryItems}
        />
        <GroceryItemList 
        groceryItems={groceryItems}
        updateGroceryItems={updateGroceryItems}
        />
      </main>
    </div>
  );
}


export default App;
