import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import Form from '../Form/Form';
import './App.css';



function App() {

    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newUnit, setNewUnit] = useState('');
    const [shoppingList, setShoppingList] = useState([])

    const handleSubmit = () =>{
        console.log('in Handle Submit')
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
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
