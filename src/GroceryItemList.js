import './App.css';


const GroceryItemList = ({contacts}) => {

    const renderGroceryItemList = () => {
        {contacts.map((contact) => (
        <div className="card" key={contact}>
            <p className="card-name">{contact}</p>
        </div>
        ))}  
    };

    return (
        <div class="grocery-list">
            <h3>My Grocery List</h3> 
            <p>This area represents the component called GroceryItemList!</p> 
            {renderGroceryItemList}
        </div> 
    );
}


export default GroceryItemList; 
