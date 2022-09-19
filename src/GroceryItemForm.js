// import React from "react";
// import './App.css';
 

// const GroceryItemForm = props => {

//     const handleChange = (event) => {
//         props.updateGroceryItems({
//             ...props.groceryItems, 
//             [event.target.id]: event.target.value,
//         });      
//     };
    
    
//     return (      
//         <form className="form" onSubmit={props.handleSubmit} >
//             <div className="form-control">
//                 <label htmlFor="foodItem"></label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="grocery item"
//                     value={props.groceryItems.name}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="number"
//                     id="quantity"
//                     name="quantity"
//                     placeholder="quantity"
//                     value={props.groceryItems.quantity}
//                     onChange={handleChange}
//                 />
//             </div>
//             <button type="submit">Add to list</button>
//         </form>
//     );
// }


// export default GroceryItemForm;