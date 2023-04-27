import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    
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
function saveList(event){
    event.preventDefault;
    axios({
        method: 'POST',
        url: '/shoppingList',
        data: {
            item: item,
            quantity: quantity,
            unit: unit
        }
    }).then((response) => {
        fetchList();
        console.log(response);
    }).catch((error) => {
        console.log('WhoOpsies!', error);
    })
}
    
    return (
        <div className="App">
        <Header />
        <form onSubmit={saveList}>
            <h2>Add an Item</h2>
           <div> 
            <p>Item:</p> 
            <input
            type='text'
             value={item}
             onChange={(event) => {setItem(event.target.value)}}
             />
            <p>Quantity:</p> 
            <input 
            type='number'
            value={quantity}
            onChange={(event) => {setQuantity(event.target.value)}}
            /> 
            <p>Unit:</p> 
            <input 
            type='text'
             value={unit}
             onChange={(event) => {setUnit(event.target.value)}}
             />
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
