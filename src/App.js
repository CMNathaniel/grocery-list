import groceryimage from './Groceries.jpeg';
import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [foodItem, setFoodItem] = useState([{
    name: "",
    quantity: "",
  }]);

  // const addFoodItem = (foodItem) => {
  //   updateFoodItems([...foodItemList, foodItem])
  // }
  // console.log(foodItemList);

  const handleChange = (event) => {
    setFoodItem({...foodItem, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(foodItem);
    setFoodItem({name: "", quantity: ""});
  };

  // is my key as the index causing any problems? Should I change that to something else?
  // const foodItemList = foodItem.map((item, index) =>
  //   <ul>
  //     <li key={index}>{item}</li>
  //   </ul>
  // );

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
              <label htmlFor="foodItem"></label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="grocery item"
                  value={foodItem.name}
                  onChange={handleChange}
              />
               <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="quantity"
                  value={foodItem.quantity}
                  onChange={handleChange}
              />
          </div>
          <button type="submit" onClick={handleSubmit}>Add to list</button>
        </form>
        <div class="grocery-list">
          <h3>My Grocery List</h3>
          <p>Total Grocery List Items: {foodItem.length}</p>
          <ul>
            <li>Below is the user inputted item: </li>
            {/* <li>{foodItem}</li> */}
            {/* <li>Below is the array of items: </li>
            <li>{foodItemList}</li> */}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
