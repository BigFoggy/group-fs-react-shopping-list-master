import './List.css'
function List({
    shoppingList,
    deleteItem,
    setPurchased,
}) {
    
    return (
        <>
            <table className = "itemTable">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(list =>
                        (
                        <tr key={list.id}>
                            <td>{list.name}</td>
                            <td>{list.quantity}</td>
                            <td>{list.unit}</td>
                            { list.isPurchased === false ?
                            <>
                            <td><button onClick={() => setPurchased(list.id)}>Buy</button></td>
                            <td><button onClick={() => deleteItem(list.id)}>Remove</button></td>
                            </>
                            :
                            <>
                            <td>Purchased!</td>
                            <td><button onClick={() => deleteItem(list.id)}>Remove</button></td>
                            </>
                            }
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    );
}

export default List;