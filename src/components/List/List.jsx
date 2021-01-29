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
                            <td>Purchased!</td>
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