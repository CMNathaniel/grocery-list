import React, { useState } from 'react';
import GroceryItemForm from "./GroceryItemForm";
import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';


const App = () => {
  // need to re-name things from Contact to something else but leaving until 
  // I can at least get the functionality to work! 
  const [contacts, updateContacts] = useState([
    {
      name: "pizza slices",
      quantity: 27
    }, 
    {
      name: "soda",
      quantity: 13
    }
  ]);

  const addContact = (contact) => {
    // I believe the ...contacts piece will store user input into an array
    console.log("addContact in App.js has run: " , contacts);
    updateContacts([...contacts, contact]);
    console.log("updateContacts inside addContact in App.js has run: contacts, contact" , contacts, contact);

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
        <GroceryItemForm addContact={addContact} contacts={contacts}/>
        <GroceryItemList contacts={contacts}/>
      </main>
    </div>
  );
}


export default App;
