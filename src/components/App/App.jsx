import {useState} from 'react';
import Form from '../Form/Form';

import Header from '../Header/Header.jsx'
import './App.css';


const [newItem, setNewItem] = useState('');
const [newQuantity, setNewQuantity] = useState(0);
const [newUnit, setNewUnit] = useState('');

function App() {
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
