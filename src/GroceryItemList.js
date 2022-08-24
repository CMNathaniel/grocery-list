import './App.css';


const GroceryItemList = ({contacts}) => {

    return (
        <div class="grocery-list">
            <h3>My Grocery List</h3>  
            {contacts.map((contact) => (
                <div className="card" key={contact}>
                    <p className="card-name">{contact}</p>
                </div>
            ))}  
        </div> 
    );
}


export default GroceryItemList; 

