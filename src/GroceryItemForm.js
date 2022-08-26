import React, { useState } from "react";
import './App.css';
 

const INITIAL_STATE = {
    name: "",
    quantity:"",
};

const GroceryItemForm = ({ addContact }) => {
   
    const [foodItem, setFoodItem] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        setFoodItem({
            ...foodItem, 
            [event.target.id]: event.target.value,
        });      
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit in GroceryItemForm.js has run: " , foodItem.name + " " , foodItem.quantity);

        //receiving callback handler from the parent component which uses the form data
        addContact(foodItem);

        setFoodItem(INITIAL_STATE);
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