import React, { useState } from 'react';
import './App.css';
import groceryimage from './Groceries.jpeg';

// const INITIAL_STATE = [
//     {
//         name: "",
//         quantity: null,
//     }
// ];

export default function App() {
  const [groceryItems, setGroceryItems] = useState(
    {
    name: "",
    quantity: null,
    }
  );

  // when the user types anything in the grocery item or quantity form fields
  // feels like a function I can refactor at some point
  const handleChange = (event) => {  
    event.preventDefault();
  };

  // when the user enters food name and quantity in the form and submits via button
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // const updateGroceryItem = [
    //     ...groceryItems, 
    //     {
    //       name: event.target.name,
    //       quantity: 5
    //     }
    //   ];

    // setGroceryItems(updateGroceryItem);
    setGroceryItems({...groceryItems, [event.target.name]: event.target.value });

    console.log(groceryItems);
    console.log(typeof(groceryItems));



    // setGroceryItems(groceryItems => 
    //   [...groceryItems, `${groceryItems.length}`]
    // );

    // {
    //   [event.target.name]: event.target.value,
    //   {groceryItems.name}: event.target.name,
    //   }

    // setGroceryItems({ ...groceryItems, [event.target.name]: event.target.value });
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
            {groceryItems.name.map((groceryItem) => (
              // not totally confident this key is in the correct element nor is it going to be unique enough 
              <div key={groceryItem.name}>
                  <li className="grocery-item">
                  {groceryItem.quantity} {groceryItem.name}
                  </li>
              </div>
            ))}
          </ul>

        </div>
      </main>
    </div>
  );
};