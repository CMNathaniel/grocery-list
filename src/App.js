import groceryimage from './Groceries.jpeg';
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [listItem, setListItem] = useState('');
  const [submittedItem, setSubmittedItem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedItem(listItem);
    setListItem("");
  }

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
          <ul>
            <li>{submittedItem}</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
