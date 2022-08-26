import './App.css';


const GroceryItemList = ({ contacts }) => {

    const renderGroceryItemList = () => {
        {contacts.map((contact) => (
        <ul>
            <li className="card-name">{contact}</li>
        </ul>
        ))}  
    };

    return (
        <div class="grocery-list">
            <h3>My Grocery List</h3> 
            <p>This area represents the component called GroceryItemList!</p> 
            {renderGroceryItemList}
            {/* {console.log(typeof(contacts))} */}
        </div> 
    );
}


export default GroceryItemList; 
