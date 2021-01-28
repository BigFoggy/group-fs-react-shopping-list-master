import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import Form from '../Form/Form';
import List from '../List/List';
import './App.css';

function App() {

    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');
    const [shoppingList, setShoppingList] = useState([])

    function deleteItem() {
        console.log('deleting item..');
    }

    function handleSubmit() {
        console.log('handle submit..');
    }

    const setPurchased = (itemId) => {
        // AXIOS PUT REQUEST
        console.log('PUT request..', itemId);
        axios({
            method: 'PUT',
            url: `/list/${itemId}`
        }).then((response) => {
            console.log('Updated Sucessfully!');
            getList();
        })
    }

    useEffect(() => {
        getList();
      }, []); 

      const getList = () => { 
        axios({
            method: 'GET',
            url: '/list'
        }).then((response)=> {
            console.log(response);
            console.log(response.data)
            setShoppingList(response.data);
            console.log(shoppingList)
        })
    }


    return (
        <div className="App">
            <Header />
            <Form 
            newItem={newItem}
            setNewItem={setNewItem}
            newQuantity={newQuantity}
            setNewQuantity={setNewQuantity}
            newUnit={newUnit}
            setNewUnit={setNewUnit}
            handleSubmit={handleSubmit}
            />
            <List 
            shoppingList={shoppingList}
            deleteItem={deleteItem}
            setPurchased={setPurchased}
            />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
