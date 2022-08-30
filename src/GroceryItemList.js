import './App.css';


const GroceryItemList = ({ contacts }) => {

    return (
        <div className="grocery-list">
            <p>This area represents the component called GroceryItemList!</p> 
            <h3>My Grocery List</h3> 
            <p>Total Items: {contacts.length}</p> 
            {/* <p>Here is contacts:{contacts}</p> */}
            {/* {contacts.map((contact) => (
                <ul>
                    <li className="card-name">{contact}</li>
                </ul>
            ))}    */}
            
        </div> 
    );
}


export default GroceryItemList; 
