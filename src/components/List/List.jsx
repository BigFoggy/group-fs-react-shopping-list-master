function List({
    shoppingList,
    deleteItem,
    setPurchased,
}) {
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Amount</td>
                        <td>Unit</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(list =>
                        (
                        <tr>
                            <td key={list.name}>{list.name}</td>
                            <td key={list.quantity}>{list.quantity}</td>
                            <td key={list.unit}>{list.unit}</td>
                            { list.isPurchased === false ?
                            <>
                            <td><button key={list.id} onClick={() => setPurchased(list.id)}>Buy</button></td>
                            <td><button key={list.name-list.unit} onClick={deleteItem}>Remove</button></td>
                            </>
                            :
                            <p>Purchased!</p>
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