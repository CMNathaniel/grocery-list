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



const GroceryItemForm = ({ addContact, contacts, updateContacts }) => {

    const handleChange = (event) => {
        updateContacts({
            ...contacts, 
            [event.target.id]: event.target.value,
        });      
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit in GroceryItemForm.js has run: " , contacts);

        //receiving callback handler from the parent component which uses the form data
        addContact({contacts});
        console.log("addContact in handleSubmit in GroceryItemForm.js has run: " , contacts);
        // setFoodItem(INITIAL_STATE);
    };
    
    return (      
        <form className="form" >
            <div className="form-control">
                <label htmlFor="foodItem"></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="grocery item"
                    value={contacts.name}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="quantity"
                    value={contacts.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Add to list</button>
        </form>
    );
}


export default GroceryItemForm;