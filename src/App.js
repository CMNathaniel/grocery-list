import groceryimage from './Groceries.jpeg';
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [firstName, setFirstName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have submitted');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Stine's Grocery List 
        </h1>
        <img src={groceryimage} className="App-logo" alt="logo" />
      </header>
      <main>
        <form className='form'>
          <div className='form-control'>
              <label htmlFor='firstName'>Name: </label>
              <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <button type='submit' onClick={handleSubmit}>Add item</button>
        </form>
      </main>
    </div>
  );
}

export default App;
