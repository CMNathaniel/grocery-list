import React, { useState } from 'react';
import GroceryItemForm from "./GroceryItemForm";
import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';


const App = () => {
  // need to re-name things from Contact to something else but leaving until 
  // I can at least get the functionality to work! 
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    // I believe the ....contacts piece will store user input into an array
    updateContacts([...contacts, contact]);
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
        <GroceryItemForm addContact={addContact}/>
        <GroceryItemList contacts={contacts}/>
      </main>
    </div>
  );
}


export default App;
