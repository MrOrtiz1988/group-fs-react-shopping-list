import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    

    useEffect(() => {
        fetchList()
      }, [])

    function fetchList(){
        axios({
            method: 'GET',
            url: '/shoppingList'
        }).then((response) => {
            console.log(response.data);
            setShoppingList(response.data)
        }).catch((error) => {
            console.log('WhoOpsies!', error);
        })
        
    }

    return (
        <div className="App">
        <Header />
        <form>
            <h2>Add an Item</h2>
           <div> 
                <p>Item: <input /></p>
            <   p>Quantity: <input /> Unit: <input /></p>
           </div>
           <button>Save</button>
        </form>
        <div>
            <h2>Shopping List</h2>
            <button>Reset</button> <button>Clear</button>
            <div>
            { 
            shoppingList.map((list) => {
            return <div className='box' key={list.id}>
                <h3>{list.name}</h3>
                <p>{list.quantity} {list.unit}</p>
                <button>Buy</button> <button>Remove</button>
                </div>
            })
            }
            </div>
        </div>
    </div>

    )
        
}



export default App;
