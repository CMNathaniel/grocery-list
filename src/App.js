import groceryimage from './Groceries.jpeg';
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [listItem, setListItem] = useState('');
  const [submittedItem, setSubmittedItem] = useState(null);
  const [allSubmittedItems, setAllSubmittedItems] = useState([]);

  // const listOfSubmittedItems = [
  //   // "carrots",
  //   // "peas",
  //   // "onions",
  //   // "bread"
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedItem(listItem);
    console.log(allSubmittedItems);
    allSubmittedItems.push(submittedItem);
    // so right now the array only gets the new item added after 2 user clicks. But even then, the new array is not getting pushed into the DOM
    // after each 
    console.log(`listof items after .push() ${allSubmittedItems}`);
    console.log(`length of listOfSubmittedItems after .push ${allSubmittedItems.length}`)
    // setListItem("");
  }

  

  // is my key as the index causing any problems? Should I change that to something else?
  const renderListOfSubmittedItems = allSubmittedItems.map((item, index) =>
    <ul>
      <li key={index}>{item}</li>
    </ul>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stine's Grocery List ☑ 
        </h1>
        <img src={groceryimage} className="App-logo" alt="logo" />
      </header>
      <main>
        <form className="form">
          <div className="form-control">
              <label htmlFor="listItem">Grocery item: </label>
              <input
                  type="text"
                  id="listItem"
                  name="listItem"
                  placeholder="oat milk"
                  value={listItem}
                  onChange={(e) => setListItem(e.target.value)}
              />
          </div>
          <button type="submit" onClick={handleSubmit}>Add to list</button>
        </form>
        <div class="grocery-list">
          <h3>My Grocery List</h3>
          <p>Total Grocery List Items: {allSubmittedItems.length}</p>
          <ul>
        
            <li>Below is the user inputted item</li>
            <li>{submittedItem}</li>
            <li>Below is the currently hardcoded array of items</li>
            <li>{renderListOfSubmittedItems}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
