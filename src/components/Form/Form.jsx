import './Form.css'
function Form({
    newItem,
    setNewItem,
    newQuantity,
    setNewQuantity, 
    newUnit,
    setNewUnit,
    handleSubmit,
}) {
    return (
        <>
        <h2>Add an item</h2>
        <form className ="itemForm" onSubmit={handleSubmit}>
                <p>Item: </p><input type="text" placeholder="Item" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
                <p>Quantity: </p><input type="number" placeholder="Amount" value={newQuantity} onChange={(event) => setNewQuantity(event.target.value)} />
                <p>Unit: </p><input type="text" placeholder="Unit" value={newUnit} onChange={(event) => setNewUnit(event.target.value)} />
                <button type="submit">Add Item</button>
        </form>
        </>
    );
}

export default Form;