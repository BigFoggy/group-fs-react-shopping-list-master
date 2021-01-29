import './Form.css'
function Form({
    newItem,
    setNewItem,
    newQuantity,
    setNewQuantity, 
    newUnit,
    setNewUnit,
    //handleSubmit,
    deleteAll,
    resetAll,
    addToList,
}) {
    const handleSubmit = (event) => {
        console.log('Submit button clicked')
        event.preventDefault();
        console.log(newItem, newQuantity, newUnit);
        addToList(newItem, newQuantity, newUnit);

    }
    return (
        <>
        <h2>Add an item</h2>
        <form className ="itemForm" onSubmit={handleSubmit}>
                <p>Item: </p><input type="text" placeholder="Item" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
                <p>Quantity: </p><input type="number" placeholder="Amount" value={newQuantity} onChange={(event) => setNewQuantity(event.target.value)} />
                <p>Unit: </p><input type="text" placeholder="Unit" value={newUnit} onChange={(event) => setNewUnit(event.target.value)} />
                <p><button type="submit">Add Item</button></p>
                
        </form>
        <p className = 'buttons'>
            <button onClick={() => deleteAll()}>Clear</button> 
            <button onClick={() => resetAll()}>Reset</button>
        </p>
        
        </>
    );
}

export default Form;