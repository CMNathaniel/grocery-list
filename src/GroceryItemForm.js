import React, { useState } from "react";
import './App.css';
 
// const INITIAL_STATE = [
//     {
//         name: "",
//         quantity:"",
//     }
// ];

// const GroceryItemForm = ({ addContact }) => {
    // const [foodItem, setFoodItem] = useState(INITIAL_STATE);

const GroceryItemForm = props => {

    const handleChange = (event) => {
        props.updateContacts({
            ...props.contacts, 
            [event.target.id]: event.target.value,
        });      
    };
    
    
    return (      
        <form className="form" onSubmit={props.handleSubmit} >
            <div className="form-control">
                <label htmlFor="foodItem"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="grocery item"
                    value={props.contacts.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="quantity"
                    value={props.contacts.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add to list</button>
        </form>
    );
}


export default GroceryItemForm;