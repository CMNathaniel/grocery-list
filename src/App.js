import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';
import GroceryItemForm from './GroceryItemForm.js';
// import GroceryItemList from './GroceryItemList.js';


const App = () => {
 
  // hook with initial empty array state groceryItems 
  // we'll use this to populate the list of grocery items 
  // groceryItems = __data type___ array ??
  // setGroceryItems data type is function

  const [groceryItems, setGroceryItems] = useState(["eggs", "bread", "cheese"]);

  // callback function to pass user typed data "onChange" from form into groceryItems
  // const handleChange = (event) => {
  //   // when a user types something into the form, the setGroceryItems hook 
  //   // updates the groceryItems array with their input

  //   //should I be using the setGroceryItems hook in this handleChange event handler?
  //   setGroceryItems(event.target.value);
  //   console.log(`HandleChange: This is the value of groceryItems`, groceryItems);
  // };

  // const addNewGroceryItem = (groceryItems) => {
  //   // setGroceryItems([...groceryItems, groceryItems]);
  //   // setGroceryItems(...groceryItems);
  //   console.log(`addNewGroceryItem: groceryItems data type = `, typeof(groceryItems));
  //   console.log(`addNewGroceryItem: setGroceryItems data type = `, typeof(setGroceryItems));
  // };

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
  {/* we pass props __, __ and __ to the component GroceryItemForm */}     
          {/* <GroceryItemForm groceryItems={groceryItems} setGroceryItems={setGroceryItems} handleChange={handleChange}/> */}
          <GroceryItemForm groceryItems={groceryItems} setGroceryItems={setGroceryItems}/>

  {/* we pass props __ to the component GroceryItemList */}

          {/* <GroceryItemList groceryItems={groceryItems}/> */}
          {/* <GroceryItemList groceryItems={groceryItems}/> */}

        </main>
      </div>
  );
}

export default App;