import React, { useState } from 'react';
import GroceryItemForm from "./GroceryItemForm";
import GroceryItemList from "./GroceryItemList";
import './App.css';
import groceryimage from './Groceries.jpeg';


const App = () => {
  // need to re-name things from Contact to something else but leaving until 
  // I can at least get the functionality to work! 

  const [contacts, updateContacts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit in GroceryItemForm.js has run: " , contacts);

    //receiving callback handler from the parent component which uses the form data
    addContact({contacts});
    console.log("addContact in handleSubmit in GroceryItemForm.js has run: " , contacts);
    // setFoodItem(INITIAL_STATE);
  };

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
        <GroceryItemForm 
        handleSubmit={handleSubmit} 
        // handleSubmit={this.handleSubmit.bind(this)} 
        addContact={addContact} 
        contacts={contacts}
        />
        <GroceryItemList 
        contacts={contacts}
        updateContact={updateContacts}
        />
      </main>
    </div>
  );
}


export default App;
