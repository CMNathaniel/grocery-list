import React, { useState } from "react";
import './App.css';
 

const GroceryItemForm = ({addContact}) => {

    const [foodItem, setFoodItem] = useState([{
        name: "",
        quantity: "",
    }]);

    const handleChange = (event) => {
        setFoodItem({...foodItem, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(foodItem);
        addContact(foodItem);
        console.log(foodItem);
        setFoodItem({name: "", quantity: ""});
    };
    
    return (      
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
    );
}


export default GroceryItemForm;